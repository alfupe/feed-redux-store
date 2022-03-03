export default function initMockServiceWorker() {
  if (
    process.env.NODE_ENV === 'development' &&
    process.env.REACT_APP_MOCKED_ENV === 'true'
  ) {
    import('../mocks/browser').then(({ worker }) => {
      worker.start({
        /** @example https://mswjs.io/docs/api/setup-worker/start#onunhandledrequest */
        //onUnhandledRequest: () => {},
        onUnhandledRequest: 'bypass',
      });
    });
  }
}
