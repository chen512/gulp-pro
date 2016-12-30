<%if(obj["type"] == "alert"){%>    <!-- 弹出提示框 -->
<div id="FPrompt" class="pop2_content">
    <!-- 开始 -->
    <!-- 设置标题区 -->
    <p class="pop2_title Ftitle">
        <%=obj["title"]%>
    </p>
    <!--设置内容区-->
    <div class="pop2_content">
        <div class="pop2_word Fcontent">
            <p>
                <!--内容信息-->
                <%if(obj["content"].indexOf("<i>")!=-1&&obj["content"].indexOf("</i>")!=-1){%>
                <%=obj["content"]%>
                <%}else{%>
		        	<span>
		        		<%=obj["content"]%>
		        	</span>
                <%}%>
                <!--内容信息-->
            </p>
        </div>
        <div class="pop2_btn">
            <!--按钮区-->
            <input type="button"  class="c_F60 w100" action="FBntAlert" value='<%=obj["FBntAlert"]%>'></input>
            <!--按钮区-->
        </div>
    </div>
    <!--设置内容区-->

</div>
<%}else if(obj["type"] == "txt"){%>
<div id="FPrompt" class="pop2_content">
    <p class="pop2_title Ftitle">
        <%=obj["title"]%>
    </p>
    <div class="pop2_content">
        <div class="pop2_word Fcontent">
            <p>
                <span><%=obj["content"]%></span>
            </p>
        </div>
    </div>
</div>
<%}else if(obj["type"] == "confirm"){%>   <!-- 弹出确认框 -->
<div id="FPrompt" class="pop2_content">
    <!-- 开始 -->
    <!-- 设置标题区 -->
    <p class="pop2_title Ftitle">  <%=obj["title"]%>  </p>

    <div class="pop2_content">
        <div class="pop2_word">
            <!-- 设置内容区 -->
            <p class="Fcontent">
                <%if(obj["content"].indexOf("<i>")!=-1&&obj["content"].indexOf("</i>")!=-1){%>
                <%=obj["content"]%>
                <%}else{%>
		        	<span>
		        		<%=obj["content"]%>
		        	</span>
                <%}%>
            </p>
            <!-- 设置内容区 -->
        </div>
        <div class="pop2_btn">
            <!-- 设置按钮区 -->
            <input type="button" action="FBntconfirm"
                   class="c_F60 w50"
                   value=<%=obj["FBntconfirm"]%>>
            </input>
            <input type="button" action="FBntcancel"
                   class="c_F60 w50"
                   value=<%=obj["FBntcancel"]%>>
            </input>
            <!-- 设置按钮区 -->
        </div>
    </div>

</div>
<%}else if(obj["type"] == "multiConfirm"){%>   <!-- 弹出确认框 -->
<div id="FPrompt" class="pop2_content">
    <!-- 开始 -->
    <div class="pop2_content">
        <!-- 设置标题区 -->
        <p class="pop2_title Ftitle"><%=obj["title"]%></p>
        <div class="pop2_word">
            <!-- 设置内容区 -->
            <p class="Fcontent">
                <%if(obj["content"].indexOf("<i>")!=-1&&obj["content"].indexOf("</i>")!=-1){%>
                <%=obj["content"]%>
                <%}else{%>
		        	<span>
		        		<%=obj["content"]%>
		        	</span>
                <%}%>
            </p>
            <!-- 设置内容区 -->
        </div>
        <div class="pop2_btn tac">
            <!-- 设置按钮区 -->
            <input type="button" action="FBntconfirm"
                   class="c_F60 w33"
                   value=<%=obj["FBntconfirm"]%>>
            </input>
            <input type="button" action="FBntcentre"
                   class="c_F60 w33"
                   value=<%=obj["FBntcentre"]%>>
            </input>
            <input type="button" action="FBntcancel"
                   class="c_F60 w33"
                   value=<%=obj["FBntcancel"]%>>
            </input>
            <!-- 设置按钮区 -->
        </div>
    </div>

</div>
<%}else if(obj["type"] == "Flayer"){%>   <!-- 弹出吐丝框 -->
<!-- 设置内容区 -->
<div class="blackblub_wrap">
    <p class="blackblub wordbreak tac">
         	<span>
           		<%=obj["content"]%>
            </span>
    </p>
</div>
<%}else if(obj["type"] == "Loading"){%>  <!-- 加载 -->
<!-- 设置内容区 -->
<div class="blackblub_wrap Loading">
    <p class="blackblub wordbreak tac">
         	<span>
	          <span class="loading_01"></span>
	          <%=obj["content"]%>
         	</span>
    </p>
</div>

<!-- <div class="Flayer">
  <%=obj["content"]%>
</div> -->
<%}%>


