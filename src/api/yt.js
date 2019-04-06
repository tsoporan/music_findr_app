/*
 * Wrapper around YT JS API
 */

async function getSubscriptions (
  User,
  params = {
    part: 'snippet',
    mine: true,
    maxResults: 50
  }
) {
  User.loading = true

  const resp = await User.client.subscriptions.list(params)
  const { items, nextPageToken } = resp.result

  if (!items || !items.length > 0) {
    return []
  }

  // TODO: Paged results, retrieve next set
  if (nextPageToken) {
  }

  User.loading = false
  User.subscriptions = items
}

export { getSubscriptions }
