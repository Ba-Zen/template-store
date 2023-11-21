import {product} from './product'
import defaultImage from './common/defaultImage'
import doubleImageBlock from './common/doubleImageBlock'
import seo from './common/seo'
import singleImageBlock from './common/singleImageBlock'
import contentSimple from './common/contentSimple'
import blog from './blog'
import blockContent from './common/blockContent'
import category from './category'
import author from './author'
import singletonHome from './home'
export const schemaTypes = [
  singletonHome,
  product,
  blog,
  author,
  contentSimple,
  blockContent,
  category,
  defaultImage,
  doubleImageBlock,
  singleImageBlock,
  seo,
]
