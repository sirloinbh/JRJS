/* 기본 버튼 스타일 */
.button {
    padding: 10px 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  }
  
  /* 프라이머리 버튼 스타일 */
  .button-primary {
    background-color: blue;
    color: white;
  }
  
  .button-primary:hover {
    background-color: darkblue;
  }
  
  /* 세컨더리 버튼 스타일 */
  .button-secondary {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  
  .button-secondary:hover {
    background-color: lightgrey;
  }
  
  /* 성공 버튼 스타일 */
  .button-success {
    background-color: green;
    color: white;
  }
  
  .button-success:hover {
    background-color: darkgreen;
  }
  
  /* 경고 버튼 스타일 */
  .button-warning {
    background-color: orange;
    color: white;
  }
  
  .button-warning:hover {
    background-color: darkorange;
  }
  
  /* 위험 버튼 스타일 */
  .button-danger {
    background-color: red;
    color: white;
  }
  
  .button-danger:hover {
    background-color: darkred;
  }
  
  /* 비활성화된 버튼 스타일 */
  .button-disabled {
    background-color: grey;
    color: white;
    cursor: not-allowed;
  }
  