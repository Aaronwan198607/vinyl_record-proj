import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Top5List() {
  return (
    <>
      <div className="a-top5List mt-8 d-none d-lg-block">
        <p className="a-top5Label h3">Top 5</p>
        <div className="a-top5Card row">
          <div className="a-top5Img col">
            <img src="./img/52.jpg" alt="" className="img-fluid" />
          </div>
          <div className="a-top5Info col list-unstyled">
            <Link to="/ProductDt" className="a-top5albumName text-18">
              日本宮崎駿日本動畫電影純輕天空之城【音樂年華】
            </Link>
            <li className="a-top5Icon">
              <BsStarFill size={20} />
            </li>
            <li className="a-albumPrice h5">$1990</li>
          </div>
        </div>
        <div className="a-top5Card row">
          <div className="a-top5Img col">
            <img src="./img/52.jpg" alt="" className="img-fluid" />
          </div>
          <div className="a-top5Info col list-unstyled">
            <Link to="/ProductDt" className="a-top5albumName text-14">
              日本宮崎駿日本動畫電影純輕天空之城【音樂年華】
            </Link>
            <li className="a-top5Icon">
              <BsStarFill size={20} />
            </li>

            <li className="a-albumPrice h5">$1990</li>
          </div>
        </div>
        <div className="a-top5Card row">
          <div className="a-top5Img col">
            <img src="./img/52.jpg" alt="" className="img-fluid" />
          </div>
          <div className="a-top5Info col list-unstyled">
            <Link to="/ProductDt" className="a-top5albumName text-18">
              日本宮崎駿日本動畫電影純輕天空之城【音樂年華】
            </Link>
            <li className="a-top5Icon">
              <BsStarFill size={20} />
            </li>
          </div>
        </div>
        <div className="a-top5Card row">
          <div className="a-top5Img col">
            <img src="./img/52.jpg" alt="" className="img-fluid" />
          </div>
          <div className="a-top5Info col list-unstyled">
            <Link to="/ProductDt" className="a-top5albumName text-14">
              日本宮崎駿日本動畫電影純輕天空之城【音樂年華】
            </Link>
            <li className="a-top5Icon">
              <BsStarFill size={20} />
            </li>
            <li className="a-albumPrice h5">$1990</li>
          </div>
        </div>
        <div className="a-top5Card row">
          <div className="a-top5Img col">
            <img src="./img/52.jpg" alt="" className="img-fluid" />
          </div>
          <div className="a-top5Info col list-unstyled">
            <Link to="/ProductDt" className="a-top5albumName text-14">
              日本宮崎駿日本動畫電影純輕天空之城【音樂年華】
            </Link>
            <li className="a-top5Icon">
              <BsStarFill size={20} />
            </li>
            <li className="a-albumPrice h5">$1990</li>
          </div>
        </div>
      </div>
    </>
  )
}

export default Top5List
