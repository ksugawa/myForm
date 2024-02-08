/***
 * 会員登録フォーム初期値
 * @return 
 */
const initialValues = {
    company_name: "",
    company_name_kana: "",
    company_tel: "",
    company_email: "",
    zipcode: "",
    prefecture: "",
    address: "",
    member_name: "",
    depts: [{ deptName: "" }],
    checked: false,
};

export default initialValues;