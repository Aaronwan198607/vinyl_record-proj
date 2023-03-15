import React from 'react'
import { Link } from 'react-router-dom'

function CenterNav() {
  return (
    <>
      <div className="a-centerNav">
        <ul className="nav justify-content-center">
          <li className="a-centerNav nav-item">
            <Link to="/VrList" className="nav-link">
              全部
            </Link>
          </li>
          <li className="a-centerNav nav-item">
            <Link to="/VrList" className="nav-link">
              獨家販售
            </Link>
          </li>
          <li className="a-centerNav nav-item">
            <Link to="/VrList" className="nav-link">
              熱門商品
            </Link>
          </li>
          <li className="a-centerNav nav-item">
            <Link to="/VrList" className="nav-link" href="#/">
              最新上架
            </Link>
          </li>
          <li className="a-centerNav nav nav-item dropdown">
            <Link
              to="/VrList"
              className="nav-link dropdown-toggle"
              // data-bs-toggle="dropdown"
              href="#/"
              role="button"
            >
              黑膠唱片
            </Link>
            <ul className="center dropdown dropdown-menu">
              <li className="center dropdown dropdown-item">華語/流行</li>
              <li>
                <Link to="/VrList" className="center dropdown dropdown-item">
                  西洋/流行
                </Link>
              </li>
              {/* <li>
                <Link to="/VrList" className="centerDropdown dropdown-item">
                  鄉村/民謠
                </Link>
              </li>
              <li>
                <Link to="/VrList" className="centerDropdown dropdown-item">
                  搖滾/金屬
                </Link>
              </li>
              <li>
                <Link to="/VrList" className="centerDropdown dropdown-item">
                  嘻哈/饒舌
                </Link>
              </li>
              <li>
                <Link to="/VrList" className="centerDropdown dropdown-item">
                  原聲帶
                </Link>
              </li> */}
            </ul>
          </li>
          <li className="centerNav nav-item">
            <Link to="/VrList" className="nav-link">
              唱片機
            </Link>
          </li>
          <li className="centerNav nav-item">
            <Link to="/VrList" className="nav-link">
              其他商品
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CenterNav
