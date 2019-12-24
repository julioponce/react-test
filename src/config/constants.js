const MILLISECOND = 1
export const SECOND = 1000 * MILLISECOND

export const FILE_LOADER_DELAY = 300 * MILLISECOND

export const HEADERS = {
  AUTH: 'x-pailot-authorization-access',
  REFRESH: 'x-pailot-authorization-refresh'
}

export const TRIP_TYPE = {
  REGULAR: 'regular',
  SCHEDULED: 'scheduled'
}

export const TRIP_STATUS = {
  SCHEDULED: 'scheduled',
  REQUESTED: 'requested',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  DRIVER_ARRIVED: 'driver_arrived',
  ONGOING: 'ongoing',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
}
