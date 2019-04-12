/*
 * Wrapper around YT JS API
 */

async function loadSubscriptions (
  User,
  params = {
    part: 'snippet',
    mine: true,
    maxResults: 50,
    pageToken: ''
  }
) {
  User.loading = true

  const resp = await User.client.subscriptions.list(params)
  const { items, nextPageToken } = resp.result

  if (items && items.length > 0) {
    User.subscriptions = User.subscriptions.concat(items)
  }

  // Load next set of results
  if (nextPageToken) {
    await loadSubscriptions(User, { ...params, pageToken: nextPageToken })
  } else {
    User.loading = false
  }
}

export { loadSubscriptions }
