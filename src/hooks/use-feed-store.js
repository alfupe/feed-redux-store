import { useActions } from 'hooks/use-actions';
import { emptyStore, feedStore } from 'redux/actions/feed-store-actions';

export function useFeedStore() {
  return useActions({ feedStore, emptyStore });
}
