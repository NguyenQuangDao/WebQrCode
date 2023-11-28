import React, { memo } from "react";
import "./InvoiceBill.scss";
function InvoiceBill() {
  return (
    <div id="invoice">
      <div class="invoice">
        <div class="top_line"></div>
        <div class="header">
          <div class="i_row">
            <div class="i_logo">
              <p>Coding Market</p>
            </div>
            <div class="i_title">
              <h2>HÓA ĐƠN</h2>
              <p class="p_title text_right">April 20, 2023</p>
            </div>
          </div>
          <div class="i_row">
            <div class="i_number">
              <p class="p_title">Mã hóa đơn: TXT0001</p>
            </div>
            <div class="i_number">
              <p class="p_title">Số lượng: 1 người</p>
            </div>
          </div>
        </div>
        <div class="body">
          <div class="i_table">
            <div class="i_table_head">
              <div className="i_col">
                <div class="i_row">
                  <p class="p_title" style={{ textAlign: "left" }}>
                    Họ và tên: Nguyễn Văn A
                  </p>
                </div>
                <div class="i_row">
                  <p class="p_title" style={{ textAlign: "left" }}>
                    Tên cửa hàng: abcxyz
                  </p>
                </div>
              </div>
            </div>
            <div class="i_table_body">
              <div class="i_row">
                <p class="p_title" style={{ textAlign: "left" }}>
                  Đồ uống:
                </p>
              </div>
              <div class="i_col">
              <div class="i_row" style={{display:'flex',justifyContent:"space-evenly",margin:'10px 0'}}>
                <div>Trà Sữa: 20.000</div>
                <div>Trà Sữa: 20.000</div>
                <div>Trà Sữa: 20.000</div>
              </div>
              <div class="i_row" style={{display:'flex',justifyContent:"space-evenly",margin:'10px 0'}}>
                <div>Trà Sữa: 20.000</div>
                <div>Trà Sữa: 20.000</div>
                <div>Trà Sữa: 20.000</div>
              </div>
              <div class="i_row" style={{display:'flex',justifyContent:"space-evenly",margin:'10px 0'}}>
                <div>Trà Sữa: 20.000</div>
                <div>Trà Sữa: 20.000</div>
                <div>Trà Sữa: 20.000</div>
              </div>
              <div class="i_row" style={{display:'flex',justifyContent:"space-evenly",margin:'10px 0'}}>
                <div>Trà Sữa: 20.000</div>
                <div>Trà Sữa: 20.000</div>
                <div>Trà Sữa: 20.000</div>
              </div>
              </div>
            </div>
            {/* <div class="i_table_foot">
              <div class="i_row">
                <div class="i_col w_10">
                  <p></p>
                </div>
                <div class="i_col w_50">
                  <p></p>
                </div>
                <div class="i_col w_10">
                  <p>Sub Total</p>
                  <p>Tax 10%</p>
                </div>
                <div class="i_col w_10">
                  <p>$150.00</p>
                  <p>$15.00</p>
                </div>
              </div>
              <div class="i_row grand_total_wrap">
                <div class="i_col w_50"></div>
                <div class="i_col w_50 grand_total">
                  <p>
                    <span>TỔNG CỘNG</span>
                    <span>$165.00</span>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div class="bottom_line"></div>
        <div className="ket" style={{ textAlign: "center", marginTop: "10px" }}>
          Xin cảm ơn quý khách
        </div>
      </div>
    </div>
  );
}
export default memo(InvoiceBill);
