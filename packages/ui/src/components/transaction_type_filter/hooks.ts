/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

// useTransactionTypeFilter hook
import { useEffect, useMemo, useState, ChangeEvent, useCallback } from 'react';
import { useMessageTypesQuery, useMsgTypesByAddressQuery } from '@/graphql/types/general_types';
import { SetterOrUpdater, useRecoilState, useRecoilValue } from 'recoil';
import {
  writeFilter,
  writeOpenDialog,
  writeSelectedMsgTypes,
  readSelectedMsgTypes,
} from '@/recoil/transactions_filter';
import { useRouter } from 'next/router';

// Define types for message type and message types
export type MessageType = {
  __typename: string;
  type: string;
  module: string;
  label: string;
};

export type MessageTypes = {
  message_type: MessageType;
};

export const useTransactionTypeFilter = () => {
  const router = useRouter();
  // Fetch message types data based on address or all message types
  const {
    data: messageTypesData,
    error: messageTypesError,
    loading: messageTypesLoading,
    refetch: messageTypesRefetch,
  } = useMessageTypesQuery();
  const {
    data: msgTypesByAddressData,
    error: msgTypesByAddressError,
    loading: msgTypesByAddressLoading,
    refetch: msgTypesByAddressRefetch,
  } = useMsgTypesByAddressQuery({
    variables: {
      addresses: `{${router.query.address}}` as string,
    },
  });

  const isAccountsPage = useMemo(() => window.location.pathname.includes('/accounts'), []);
  const isValidatorDetailsPage = useMemo(
    () => window.location.pathname.includes('/validators/'),
    []
  );

  // Determine data, error, loading, and refetch function based on page context
  const data = isAccountsPage || isValidatorDetailsPage ? msgTypesByAddressData : messageTypesData;
  const error =
    isAccountsPage || isValidatorDetailsPage ? msgTypesByAddressError : messageTypesError;
  const loading =
    isAccountsPage || isValidatorDetailsPage ? msgTypesByAddressLoading : messageTypesLoading;
  const refetch =
    isAccountsPage || isValidatorDetailsPage ? msgTypesByAddressRefetch : messageTypesRefetch;

  // State for filtered message types and selected filters
  const [filteredTypes, setFilteredTypes] = useState<{ module: string; msgTypes: MessageType[] }[]>(
    []
  );

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const selectedMsgTypes = useRecoilValue(readSelectedMsgTypes);
  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false);

  const [, setFilter] = useRecoilState(writeFilter) as [string, SetterOrUpdater<string>];
  const [, setSelectedMsgs] = useRecoilState(writeSelectedMsgTypes) as [
    string[],
    SetterOrUpdater<string[]>
  ];
  const [__, setOpenDialog] = useRecoilState(writeOpenDialog) as [
    boolean,
    SetterOrUpdater<boolean>
  ];

  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);

  const handleOpen = () => {
    setSelectedFilters(selectedMsgTypes);
    setOpenDialog(true);
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };

  // Merge all messages by label for transactions page
  const mergeAllMsgsByLabelForTxsPage = (messages: MessageType[] | undefined): MessageType[] => {
    // Initialize label map
    const labelMap: { [key: string]: string } = {};

    // Iterate over messages to merge by label
    messages?.forEach((message) => {
      if (!labelMap[message.label]) {
        labelMap[message.label] = message.type;
      } else {
        labelMap[message.label] += `,${message.type}`;
      }
    });

    // Initialize reduced messages array
    const reducedMessages: MessageType[] = [];

    // Iterate over label map to create reduced messages
    Object.entries(labelMap).forEach(([label, type]) => {
      reducedMessages.push({
        __typename: 'message_type',
        type,
        module: messages?.find((msg) => msg.label === label)?.module || '',
        label,
      });
    });

    return reducedMessages;
  };

  // Merge messages by label for address pages
  const mergeAddressMsgsByLabel = (messages: MessageTypes[] | undefined): MessageType[] => {
    // Initialize label map
    const labelMap: { [key: string]: string } = {};

    // Iterate over messages to merge by label
    messages?.forEach((message) => {
      if (!labelMap[message?.message_type?.label]) {
        labelMap[message?.message_type?.label] = message?.message_type?.type;
      } else {
        labelMap[message?.message_type?.label] += `,${message?.message_type?.type}`;
      }
    });

    // Initialize reduced messages array
    const reducedMessages: MessageType[] = [];

    // Iterate over label map to create reduced messages
    Object.entries(labelMap).forEach(([label, type]) => {
      reducedMessages.push({
        __typename: 'message_type',
        type,
        module:
          messages?.find((msg) => msg?.message_type?.label === label)?.message_type?.module || '',
        label,
      });
    });

    return reducedMessages;
  };

  // Format message types based on page context
  const formatTypes = useCallback(
    (
      messages: MessageTypes[] | MessageType[] | null | undefined
    ): { module: string; msgTypes: MessageType[] }[] => {
      if (!messages) {
        return [];
      }
      const msgs = [...messages];

      // Merge labels based on page context
      const updatedMessages =
        isAccountsPage || isValidatorDetailsPage
          ? mergeAddressMsgsByLabel(msgs as MessageTypes[])
          : mergeAllMsgsByLabelForTxsPage(msgs as MessageType[]);

      // Initialize module messages map
      const moduleMessagesMap: { [key: string]: MessageType[] } = {};

      // Iterate over updated messages to group by module
      updatedMessages.forEach((msgType) => {
        if (!moduleMessagesMap[msgType.module]) {
          moduleMessagesMap[msgType.module] = [];
        }
        if (!moduleMessagesMap[msgType.module].some((msg) => msg.label === msgType.label)) {
          moduleMessagesMap[msgType.module].push(msgType);
        }
      });

      return Object.entries(moduleMessagesMap).map(([module, msgTypes]) => ({
        module,
        msgTypes,
      }));
    },
    [isAccountsPage, isValidatorDetailsPage]
  );

  // Handle filtering transactions based on selected filters
  const handleFilterTxs = () => {
    const str = selectedFilters.join(',');
    const query = `{${str}}`;
    setFilter(query);
    handleCancel();
  };

  // Handle selection of transaction types
  const handleTxTypeSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;

    if (checked) {
      const updatedFilters = [...selectedFilters, value];
      setSelectedFilters(updatedFilters);
      setSelectedMsgs(updatedFilters);
    } else {
      const updatedFilters = selectedFilters.filter((item) => {
        return item !== value;
      });
      setSelectedFilters(updatedFilters);
      setSelectedMsgs(updatedFilters);
      setSelectAllChecked(false);
    }
  };

  // Handle selection of all transaction types
  const handleSelectAllTxTypes = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setSelectAllChecked(checked);
    if (checked) {
      const allTypes = filteredTypes.flatMap((msgData) => msgData.msgTypes.map((msg) => msg.type));
      setSelectedFilters(allTypes);
      setSelectedMsgs(allTypes);
    } else {
      setSelectedFilters([]);
      setSelectedMsgs([]);
    }
  };

  // Memoized computation of message type list
  const msgTypeList = useMemo(() => {
    const typesList = formatTypes(
      isAccountsPage || isValidatorDetailsPage
        ? (data?.msgTypes as MessageTypes[])
        : (data?.msgTypes as MessageType[])
    );
    typesList.sort((a, b) => a.module.localeCompare(b.module));
    setFilteredTypes(typesList);
    return typesList;
  }, [data?.msgTypes, formatTypes, isAccountsPage, isValidatorDetailsPage]);

  // Function to search/filter transaction types
  const txTypeSearchFilter = useCallback(
    (value: string) => {
      const parsedValue = value.replace(/\s+/g, '').toLowerCase();
      if (parsedValue === '' || parsedValue === null) {
        const typesList = formatTypes(
          isAccountsPage || isValidatorDetailsPage
            ? (data?.msgTypes as MessageTypes[])
            : (data?.msgTypes as MessageType[])
        );
        typesList.sort((a, b) => a.module.localeCompare(b.module));
        setFilteredTypes(typesList);
      } else {
        const typesList = formatTypes(
          isAccountsPage || isValidatorDetailsPage
            ? (data?.msgTypes as MessageTypes[])
            : (data?.msgTypes as MessageType[])
        );
        typesList.sort((a, b) => a.module.localeCompare(b.module));
        const types = typesList.filter(
          (v: { module: string; msgTypes: { type: string; label: string }[] }) =>
            v.msgTypes.some((ms) => ms.type.toLowerCase().indexOf(parsedValue) !== -1)
        );
        setFilteredTypes(types);
      }
    },
    [data?.msgTypes, formatTypes, isAccountsPage, isValidatorDetailsPage]
  );

  return {
    data,
    loading,
    msgTypeList,
    filteredTypes,
    selectedFilters,
    selectAllChecked,
    txTypeSearchFilter,
    handleCancel,
    handleOpen,
    handleFilterTxs,
    handleTxTypeSelection,
    handleSelectAllTxTypes,
  };
};
