import React from 'react'
import california from '../../images/california.png'
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
        <img className="watermark" src={california} />
        <h1>CA-Califonia State</h1>
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
              <p>ANAHEIM- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>ANAHEIM</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,375$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,313$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,545$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>FONTANA- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>FONTANA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,338$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,570</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>FREMONT- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>FREMONT</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,575$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,513</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,745$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>EAST BAY- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>BAY POINT</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,575$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,513</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,745</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>HIGH DESERT- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>HESPERIA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,450$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,388</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,620$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LOS ANGELES - IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>GARDENA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,375$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,313$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,545$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>NORTH HOLLYWOOD- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>NORTH HOLLYWOOD</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,338$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,570$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>NORTH HOLLYWOOD- IAA/ OFF SIT</p>
            </div>
            <div class="table-cell first-cell">
              <p>BURBANK</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,338$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,5
                70$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SAN DIEGO IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>SAN DIEGO</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,363$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,595$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SACRAMENTO- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>CORDOVA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,575$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,513$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,745$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>HAYWARD- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>HAYWARD</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,575$</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,513</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,745$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LOS ANGELES- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>LOS ANAGELES</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,375$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,313$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,545$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LONG BEACH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>WILMINGTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,375</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,313$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,545$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MARTINEZ- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>MARTINEZ</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,575$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,513$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,745$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>RANCHO CUCAMONGA- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>RANCHO CUCAMONGA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,338$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,570$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SUN VALLEY- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>SUN VALLEY</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,400</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,338$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,570$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SUN VALLEY- COPART/ SUB LOT</p>
            </div>
            <div class="table-cell first-cell">
              <p>LANCASTER</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,363$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,595$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SACRAMENTO- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>SACRAMENTO</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,575$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,513$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,745$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SAN DIEGO- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>SAN DIEGO</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,363$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,595$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SAN BERNARDINO- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>COLTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,338$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,570$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SAN JOSE- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>SAN MARTIN</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,575$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,513$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,745$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>VAN NUYS- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>VAN NUYS</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,338$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,570$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>VAN NUYS- COPART// SANTA PAULA</p>
            </div>
            <div class="table-cell first-cell">
              <p>SANTA PAULA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,500$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,438$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,670$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>VALLEJO- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>VALLEJO</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,575$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,513$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,745$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM RIVERSIDE</p>
            </div>
            <div class="table-cell first-cell">
              <p>RIVERSIDE</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,338$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,570$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM CENTRAL CALIFORNIA</p>
            </div>
            <div class="table-cell first-cell">
              <p>FRESNO</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,525$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,463$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,695$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM SOUTHERN CALIFORNIA</p>
            </div>
            <div class="table-cell first-cell">
              <p>FONTANA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,338$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,570$</p>
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