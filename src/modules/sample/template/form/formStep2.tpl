<div id="transferConfirmView" class="divContent"><div class="pd_content">
  <p class="title_ts_grey">信息确认</p>

  <div class="list list_a">

    <ul>
      <li>
        <dl>
          <dt class="dsn">&nbsp;</dt>
          <dd>
            <span>姓名： </span> <span class="f_c_dd5522"><%=userName%></span>
          </dd>
          <dd> <span>电话：</span> <span class="f_c_dd5522"><%=telephoneNum%></span> </dd>
          <dd> <span>备注： </span> <span><%=remarks%></span> </dd>
        </dl>
      </li>
    </ul>
  </div>
  <div class="list list_b m_t10">
    <ul>
      <li class="h44 dst w100">
        <span class="dstc vam word_four">授权码：</span>
        <span class="dstc vam">
            <input bankpwd="true" type="password" maxlength="6" onfocus="bankPwdFocus(this)" placeholder="请输入授权码" pattern="[0-9]*" id="edit_password" class="w100">
        </span>
       </li>
    </ul>
  </div>
    <input light="t" type="button" id="btn_submit" value="确定" class="btn_new_orange w100 m_t10">
  </div>

</div>