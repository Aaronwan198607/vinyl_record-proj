import React from 'react'
import LeftSideForm from './components/LeftSideForm'
import Top5List from './components/Top5List'
import CenterNav from './components/CenterNav'
import CenterListCard from './components/CenterListCard'
import Arrangement from './components/Arrangement'


function VrList() {
  return (
    <>
      <main className="a-main bg-dark">
        <div className="a-product container">
          <div className="row">
            <div className="a-menuLeft col-12 col-md-2">
              <p className="a-menuLeftLabel h4">搜尋商品</p>
              {/* 左側Form表單元件 */}
              <LeftSideForm />
              {/* 左側Top5元件 */}
              <Top5List />
            </div>
            <div className="a-centerList col-12 col-md-10">
              {/* 中間麵包屑元件 */}
              <CenterNav />
              {/* 排序按鈕*/}
              <Arrangement />

              <div className="a-productListFs">
                <div className="row row-cols-sm-2 row-cols-lg-4 ms-10">
                  {/*商品列表卡片 */}
                  <CenterListCard />
                  <CenterListCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default VrList
