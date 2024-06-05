import chainConfig from '@/chainConfig';
import useApollo from '@/graphql/useApollo';
import { useWindowOrigin } from '@/hooks/use_window';
import Main, { MainProps } from '@/screens/app/components/main';
import { useApp } from '@/screens/app/hooks';
import {
  ADDITIONAL_LINK_TAGS_SEO,
  ADDITIONAL_META_TAGS,
  OPEN_GRAPH_SEO,
  TWITTER_SEO,
} from '@/screens/app/utils';
import useAppTranslation from '@/hooks/useAppTranslation';

import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';

import { QueryClientProvider } from '@tanstack/react-query';

import { DefaultSeo } from 'next-seo';

import { RecoilRoot } from 'recoil';
import queryClient from '@/graphql/useReactQuery';

const { title } = chainConfig();

function MyApp(props: MainProps<{ initialApolloState?: NormalizedCacheObject }>) {
  useApp();
  const { pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { t } = useAppTranslation();
  const { location } = useWindowOrigin();

  return (
    <RecoilRoot>
      <DefaultSeo
        titleTemplate={`%s | ${title}`}
        title={t('common:stalwart') ?? undefined}
        description={t('common:description') ?? undefined}
        openGraph={{
          title: `${t('common:stalwart')} | ${title}`,
          description: t('common:description') ?? undefined,
          url: location,
          ...OPEN_GRAPH_SEO,
        }}
        twitter={TWITTER_SEO}
        additionalLinkTags={ADDITIONAL_LINK_TAGS_SEO}
        additionalMetaTags={ADDITIONAL_META_TAGS}
      />
      <ApolloProvider client={apolloClient}>
        <QueryClientProvider client={queryClient}>
          <Main {...props} />
        </QueryClientProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
