import * as yup from 'yup';

/***
 * 会員登録フォームスキーマ
 * @return
 */
const SCHEMA = yup
    .object({
        company_name: yup.string().max(100),
        company_name_kana: yup.string().max(100),
        company_tel: yup.string().max(100),
        company_email: yup.string()
            .email('メールアドレスの形式ではありません。')
            .max(100),
        zipcode: yup.string().max(100),
        prefecture: yup.string().max(100),
        address: yup.string().max(100),
        member_name: yup.string().max(100),
        checked: yup.boolean(),
        depts: yup.array().of(
            yup.object({
                deptName: yup.string().max(100)
            })
        ),

    })
    .required('※入力必須の項目です。');

export default SCHEMA;
