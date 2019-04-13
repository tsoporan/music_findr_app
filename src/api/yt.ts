/*
 * Wrapper around YT JS API
 */

interface SubscriptionParams {
  part: string;
  mine: boolean;
  maxResults: number;
  pageToken: string;
}

async function loadSubscriptions(
  User,
  params: SubscriptionParams = {
    part: "snippet",
    mine: true,
    maxResults: 50,
    pageToken: ""
  }
) {
  User.subscriptions.loading = true;

  const resp = await User.youtube.subscriptions.list(params);
  const { items, nextPageToken } = resp.result;

  if (items && items.length > 0) {
    User.subscriptions.items = User.subscriptions.items.concat(items);
  }

  // Load next set of results
  if (nextPageToken) {
    await loadSubscriptions(User, { ...params, pageToken: nextPageToken });
  } else {
    User.subscriptions.loading = false;
  }
}

export { loadSubscriptions };
