import React from 'react'
import taxas from '../../images/taxas.png'
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
        <img className="watermark" src={taxas} />
        <h1>TX - Texas State</h1>
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
              <p>AUSTIN-IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>DALE</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ABILENE- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>ABILENE</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,750$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
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
              <p>AMARILLO- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>AMARILLO</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,800$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,575$</p>
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
              <p>CORPUS CHRISTI- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>CORPUS CHRISTI</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,475$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,500$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>DALLAS/FT. WOETH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>GRAND PRAIRIE</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>DALLAS- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>WILMER</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>EL PASO- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>EL PASO</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,800$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,575$</p>
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
              <p>FORT WORTH NORTH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>JUSTIN</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>HOUSTON-SOUTH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>ROSHARON</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,550$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,325$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,350$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>HOUSTON- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>HOUSTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,550$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,325$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,350$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>HOUSTON-NORTH - IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>HOUSTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,550$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,325$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,350$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LONGVIEW- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>LONG VIEW</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LUBBOCK- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>LUBBOCK</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,775$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,550$</p>
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
              <p>SAN ANTONIO-SOUTH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>SAN ANTONIO</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,675$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,475$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>AMARILLO- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>AMARILLO</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,800$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,575$</p>
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
              <p>ABILENE- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>ABILENE</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,750$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
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
              <p>ANDREWS- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>ANDREWS</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,825$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,600$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,625$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>AUSTIN-COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>NEW BRAUNFELS</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CORPUS CHRISTI- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>CORPUS CHRISTI</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,700$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,475$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,500$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>DALLAS SOUTH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>WILMER</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>DALLAS-COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>GRAND PRAIRIE</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>EL PASO- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>ANTHONY</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,800$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,575$</p>
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
              <p>HOUSTON COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>HOUSTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,550$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,325$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,350$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LONGVIEW- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>LONG VIEW</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LUFKIN- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>LUFKIN</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MCALLEN- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>MERCEDES</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,675$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,475$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SAN ANTONIO COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>SAN ANTONIO</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,675$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,475$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>WACO- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>TEMPLE</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,675$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,475$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM DALLAS</p>
            </div>
            <div class="table-cell first-cell">
              <p>DALLAS</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,425$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,450$</p>
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