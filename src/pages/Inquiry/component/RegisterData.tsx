/***
* 会員登録フォームデータ
* @return 
*/
interface RegisterData {
    company_name: string,
    company_name_kana: string,
    company_tel: string,
    company_email: string,
    zipcode: string,
    prefecture: string,
    address: string,
    member_name: string,
    dept_name: string,
    dept_name1: string,
    checked: boolean,
};

export default RegisterData;