import React from 'react'

// 依照價格排序元件 from </VrList>
function Arrangement() {
  return (
    <>
      <div class="a-dropdown-center text-end mb-5">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          排序
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="a-dropdown dropdown-item" href="#/">
              依價格排序0~10000
            </a>
          </li>
          <li>
            <a className="a-dropdown dropdown-item" href="#/">
              依名稱排序A~Z
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Arrangement
