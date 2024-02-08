/***
* 会員登録フォームデータ
* @return 
*/
interface RegisterData {
    name: string | undefined;
    id: number;
    company_name: string,
    company_name_kana: string,
    company_tel: string,
    company_email: string,
    zipcode: string,
    prefecture: string,
    address: string,
    member_name: string,
    depts: { deptName: string }[];
    deptValue: string;
    checked: boolean,
};

export default RegisterData;