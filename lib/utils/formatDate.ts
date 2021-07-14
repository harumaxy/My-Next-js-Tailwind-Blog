import { format } from 'date-fns'
import siteMetadata from '@/data/siteMetadata.json'

const formatDate = (date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const now = new Date(date)

  return format(now, 'yyyy/M/d')
}

export default formatDate
