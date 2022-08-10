import './article-item.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';

export default function ArticleItem(props) {
  const isStyleRow = false
  const isStyleCard = false
  const isShowDesc = false
  const isShowCategoies = false
  const isShowAvatar = true

  const title = props.postInfo
  // console.log(title)

  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  })

  return (
    <article className={classes}>
      <ArticleItemThumb />
      <div className="article-item__content">

        { isShowCategoies && <ArticleItemCategories /> }
        { isShowCategoies && <ArticleItemStats /> }

        <ArticleItemTitle postTitle={title}  />

        { isShowDesc && <ArticleItemDesc /> }

        <ArticleItemInfo isShowAvatar={isShowAvatar} />
      </div>
    </article>
  )
}