import relativeTime from 'dayjs/plugin/relativeTime'

import dayjs from 'dayjs'

dayjs.extend(relativeTime)

export{ dayjs as time }