import React from 'react'
import pennsylvania from '../../images/pennsylvania.png'
import logo from '../../images/logo.png'
import back from '../../images/back.png'
import { Link } from 'react-router-dom';

function California() {
  return (
    <div className="container">
      <div className="head">
        <img className="watermark" src={logo} />
        <h1>AL-SAFEE AL-MOTAHIDA</h1>
      </div>
      <hr></hr>
      <div className="img_container">
        <Link className="link" to='/landing'> <img className="back" src={back} /></Link>
        <img className="watermark" src={pennsylvania} />
        <h1>PA - Pennsylvania State</h1>
      </div>
      <div class="table-box">
        <div class="table-row table-head">
          <div class="table-cell first-cell-Auction ">
            <p>المزاد</p>
          </div>
          <div class="table-cell first-cell">
            <p>المدينة</p>
          </div>
          <div class="table-cell first-cell">
            <p>سعر النقل (الاردن)</p>
          </div>
          <div class="table-cell first-cell">
            <p>سعر النقل (الامارات)</p>
          </div>
          <div class="table-cell first-cell">
            <p>سعر النقل (ام قصر)</p>
          </div>
          <div class="first-cell table-cell border">
            <p>سعر النقل (سيارة كبيرة)</p>
          </div>

        </div>
        <div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ALTOONA -IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>EAST FREEDOM</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,888</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>BRIDGEPORT IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>BRIDGE PORT</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,738$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,550$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,550$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ERIE- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>GARLAND</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,963</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,775$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,775$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>PITTSBURGH NORTH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>GIBSONIA</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,888</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>PITTSBURGH IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>ALIQUIPPA</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,888</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SCRANTON- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>PITTSTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,763</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,575$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,575$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>YORK SPRINGS - IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>YORK SPRINGS</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,763</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,575$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,575$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ALTOONA- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>ALTOONA</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,888</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CHAMBERSBURG- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>CHAMBERSBURG</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,863</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,675$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,675$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>HARRISBURG- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>GRANTVILLE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,788</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,600$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,600$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>PITTSBURGH EAST- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>ADAMS BURGH</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,888</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>PHILADELPHIA EAST-COPART/SUBLO</p>
            </div>
            <div class="table-cell first-cell">
              <p>CHALFONT</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,713</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>PITTSBURGH NORTH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>ELLWOOD CITY</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,888</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>- PITTSBURGH SOUTH COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>WEST MIFFLIN</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,888</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>- PITTSBURGH WEST- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>WEST MIFFLIN</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,888</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>YORK HAVEN COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>YORK HAVEN</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,763</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,575$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,575$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SCRANTON- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>DURYEA</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,763</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,575$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,575$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM PHILADELPHIA</p>
            </div>
            <div class="table-cell first-cell">
              <p>HATFIELD</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,713</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>



          <div className='notes'>
            <h1>ملاحضات</h1>
            <i>تكون كلفت النقل الداخلي
              للسيارة ذات الحجم الكبيرة مثل الدوج رام والسوبر بين وغيرها اعلى
              بقليل بسبب الفرق في بالوزن والحجم مقارنة بالمركبات الاعتيادية -</i>
            <i>تتكون كلفت النقل الداخلي من الولايات ذات الكوارث الطبيعية (الغرق , الاعاصير, العواصف الثلجية) اعلى خلال فترة هذه الكوارث  -</i>
            <i>تكون كلفة النقل الداخلي بالنسبة للساحات الخارج المزاد اعلى بقليل حسب بعد الساحة الثانوية
              عن موقع المزاد يرجى الاستفسار عن السعر قبل الشراء -</i>
          </div>

        </div>
      </div>
    </div>
  )
}

export default California