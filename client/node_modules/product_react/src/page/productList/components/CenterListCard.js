// 商品咧表卡片 from </VrList>
import React from 'react'
import ShoppingCar from './ShoppingCar'
import { Link } from 'react-router-dom'

// 葉面使用到之icon元件
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { MdShoppingCartCheckout, MdShoppingCart } from 'react-icons/md'

function CenterList() {
  const [showCarIcon, setShowCarIcon] = React.useState(false)
  // 加入蒐藏icon顯示切換
  const [showIcon, setShowIcon] = React.useState(false)
  //  加入購物車icon顯示切換

  return (
    <>
      <div className="a-centerArea col mb-10">
        <div className="a-productCardFs card h-100 ">
          <img
            src="./img/52.jpg"
            className="a-card-img-top w-100"
            alt="商品專輯"
          />
          <div className="a-productCard card-body p-0 m-2 list-unstyled">
            <Link to="/ProductDt" className="a-productAlbumName">
              【音樂年華】日本宮崎駿日本動畫電影純輕天空sss之城
            </Link>
            <li>
              <i className="h4 float-end">$1990</i>
              {showIcon ? (
                <FcLike size={30} onClick={() => setShowIcon(!showIcon)} />
              ) : (
                <FcLikePlaceholder
                  size={30}
                  onClick={() => setShowIcon(!showIcon)}
                />
              )}
            </li>
          </div>

          <div class="d-grid gap-2">
            <button
              className="btn btn-info"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              {showCarIcon ? (
                <MdShoppingCart
                  size={30}
                  onClick={() => setShowCarIcon(!showCarIcon)}
                />
              ) : (
                <MdShoppingCartCheckout
                  size={25}
                  onClick={() => setShowCarIcon(!showCarIcon)}
                />
              )}
              加入購物車
            </button>
            {/* 購物車隱藏視窗 */}
            <ShoppingCar />
          </div>
        </div>
      </div>
    </>
  )
}

export default CenterList
