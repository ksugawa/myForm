import React, { ChangeEvent, useState, useCallback } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PATH from "../../path";
import './Inqury.scss';
import { Row, Col, Button, FormCheck } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Layout from '../../components/Layout';


/***
 * 会員登録フォーム初期値
 * @return 
 */
const initialValues = {
    company_name: "",
    company_name_kana: "",
    company_tel: "",
    company_email: "",
    postcode: "",
    prefecture: "",
    address: "",
    member_name: "",
    dept_name: "",
};


/***
 * 会員登録フォームスキーマ
 */
const schema = yup.object({
    // 会社名
    company_name: yup
        .string()
        .required('※入力必須の項目です。')
        .max(100),
    company_name_kana: yup
        .string()
        .required('※入力必須の項目です。')
        .max(100),
    company_tel: yup
        .string()
        .required('※入力必須の項目です。')
        .max(100),
    company_email: yup
        .string()
        .email('メールアドレスの形式ではありません。')
        .required('※入力必須の項目です。')
        .max(100),
    postcode: yup
        .string()
        .required('※入力必須の項目です。')
        .max(100),
    prefecture: yup
        .string()
        .required('※入力必須の項目です。')
        .max(100),
    address: yup
        .string()
        .required('※入力必須の項目です。')
        .max(100),
    member_name: yup
        .string()
        .required('※入力必須の項目です。')
        .max(100),
    dept_name: yup
        .string()
        .required('※入力必須の項目です。')
        .max(100),
});


const Inqury = () => {
    const {
        register,
        handleSubmit,
        formState: { isDirty, errors },
    } = useForm({
        mode: 'onBlur',
        defaultValues: initialValues,
        resolver: yupResolver(schema),
    });

    const [selected, setSelected] = useState("plan_1");
    const [count, setCount] = useState(0);
    const [groups, setGroups] = useState<FormData[]>([]);
    const [idCounter, setIdCounter] = useState<number>(1);

    const onSubmit = (data: any) => console.log(data);

    // const handleAddDept = () => {
    //     if (groups.length < 5) {
    //         const formBody: FormData = {
    //             id: idCounter,
    //             dept_name: "",
    //         };
    //         setIdCounter((prevId: number) => prevId + 1);
    //         setGroups((prevGroups) => [...prevGroups, formBody]);
    //     };
    // };

    // const handleInputChange = (id: number, key: keyof FormData) =>
    //     (e: React.ChangeEvent<HTMLInputElement>) => {
    //         setGroups((prevGroups) =>
    //             prevGroups.map((group) =>
    //                 group.id === id ? { ...group, [key]: e.target.value } : group
    //             )
    //         );
    // };


    return (
        <Layout>
            <form onSubmit={handleSubmit(onSubmit)} className="form-body">
                <h1>会員登録フォーム</h1>
                <div className="form-details-contents">
                    <span>詳細は下記をご確認ください。</span><br />
                    <Link
                        to={PATH.HELP}
                        className="link-text"
                        target="_blank"
                    >ヘルプページにいく
                    </Link>
                </div>

                <div className="form-body-container">
                    <Row className="form-item align-items-center">
                        <Col xs={5}>
                            <label htmlFor="company_name">
                                <span className="required">必須</span>会社名
                            </label>
                        </Col>
                        <Col xs={5}>
                            <input
                                id="company_name"
                                {...register('company_name', {
                                    required: true,
                                })}
                                placeholder="例)　株式会社あいうえお"
                            />
                            <span className="error-msg">{errors.company_name?.message}</span>
                        </Col>
                    </Row>
                    <Row className="form-item align-items-center">
                        <Col xs={5}>
                            <label htmlFor="company_name_kana">
                                <span className="required">必須</span>会社名フリガナ
                            </label>
                        </Col>
                        <Col xs={5}>
                            <input
                                id="company_name_kana"
                                {...register('company_name_kana', {
                                    required: true
                                })}
                                placeholder="例)　カブシキガイシャアイウエオ"
                            />
                            <span className="error-msg">{errors.company_name_kana?.message}</span>
                        </Col>
                    </Row>
                    <Row className="form-item align-items-center">
                        <Col xs={5}>
                            <label htmlFor="company_tel">
                                <span className="required">必須</span>電話番号
                            </label>
                        </Col>
                        <Col xs={5}>
                            <input
                                id="company_tel"
                                {...register('company_tel', {
                                    required: true
                                })}
                                placeholder="例)　012345678910"
                            />
                            <span className="error-msg">{errors.company_tel?.message}</span>
                        </Col>
                    </Row>
                    <Row className="form-item align-items-center">
                        <Col xs={5}>
                            <label htmlFor="company_email">
                                <span className="required">必須</span>メールアドレス
                            </label>
                        </Col>
                        <Col xs={5}>
                            <input
                                id="company_email"
                                {...register('company_email', {
                                    required: true
                                })}
                                placeholder="例)　abc@def.co.jp"
                            />
                            <span className="error-msg">{errors.company_email?.message}</span>
                        </Col>
                    </Row>
                    <Row className="form-item align-items-center">
                        <Row>
                            <Col xs={5}>
                    <label>
                                    <span className="required">必須</span>住所
                                </label>
                            </Col>

                        </Row>
                        <Row className="pb-16">
                            <Col xs={5}>
                                <label htmlFor="postcode" className="text-right">郵便番号</label>
                            </Col>
                            <Col xs={5}>
                                <input
                                    id="postcode"
                                    {...register('postcode', {
                                        required: true
                                    })}

                                />
                            </Col>
                        </Row>
                        <Row className="pb-16">
                            <Col xs={5}>
                                <label htmlFor="prefecture" className="text-right">都道府県</label>
                            </Col>
                            <Col xs={5}>
                                <input
                                    id="prefecture"
                                    {...register('prefecture', {
                                        required: true
                                    })}

                                />
                            </Col>
                        </Row>
                        <Row className="pb-16">
                            <Col xs={5}>
                                <label htmlFor="address" className="text-right">市区町村</label>
                            </Col>
                            <Col xs={5}>
                        <input
                                    id="address"
                                    {...register('address', {
                                        required: true
                                    })}
                                />
                            </Col>
                            <span className="error-msg">{errors.postcode?.message}</span>
                            <span className="error-msg">{errors.prefecture?.message}</span>
                            <span className="error-msg">{errors.address?.message}</span>

                        </Row>
                    </Row>
                    <Row className="form-item align-items-center">
                        <Col xs={5}>
                            <label htmlFor="member_name">
                                <span className="required">必須</span>担当者名
                    </label>
                        </Col>
                        <Col xs={5}>
                        <input
                                id="member_name"
                                {...register('member_name', {
                                    required: true
                                })}
                                placeholder="例)　東京太郎"
                            />
                            <span className="error-msg">{errors.member_name?.message}</span>
                        </Col>
                    </Row>
                    <Row className="form-item align-items-center">
                        <Col xs={5}>
                            <label htmlFor="dept_name">
                                <span className="required">必須</span>担当者部署名
                    </label>
                        </Col>
                        <Col xs={5}>
                            <input
                                id="dept_name"
                                {...register('dept_name', {
                                    required: true
                                })}
                                placeholder="例)　営業部"
                            />
                            <span className="error-msg">{errors.dept_name?.message}</span>
                        </Col>
                    </Row>
                    <Row className="form-item align-items-center">
                        <Button
                            type="button"
                        className="button-add"
                        // onClick={handleAddDept}
                    >
                            担当部署追加
                        </Button>
                        <Row className="pt-16 pb-16 align-items-center">
                            <Col xs={5}>
                                <label htmlFor="dept_name">担当者部署１</label>
                            </Col>
                            <Col xs={5}>
                                <input
                                    id="dept_name"
                                    {...register('dept_name', { required: true })}
                                    placeholder="例)　営業部"
                                />
                            </Col>
                        </Row>
                    </Row>
                    {/* {groups.map((group) => (
                        <div key={group.id}>
                            <input
                                type="text"
                                placeholder={`承認者 ${group.id}`}
                                value={group.name}
                                onChange={handleInputChange(group.id, 'name')}

                            />
                        </div>
                ))} */}
                    <Row className="form-item check-box-area">
                        <div className="d-flex align-items-center center">
                            <FormCheck /><span>個人情報の取扱規程に同意する</span>
                        </div>
                        <span>当社の<Link to="" className="link-text">個人情報の取扱規程について</Link>同意される方のみ送信できます。</span>
                    </Row>
                    <Button
                        disabled={!isDirty}
                        type="submit"
                        className="submit-btn"
                        value="Submit"
                    >送信
                    </Button>
                </div>
            </form>
        </Layout>
    );
};

export default Inqury;
