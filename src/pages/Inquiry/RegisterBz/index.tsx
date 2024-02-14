import React, { useState } from "react";
import initialValues from "../component/InitialValues";
import SCHEMA from "../component/Schema";
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PATH from "../../../path";
import '../Inqury.scss';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Layout from '../../../components/Layout';
import axios from "axios";


const RegisterBz = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { isDirty, isValid, errors },
    } = useForm({
        mode: 'onBlur',
        defaultValues: initialValues,
        resolver: yupResolver(SCHEMA),
    });

    const [zipcode, setZip] = useState("");
    const [prefecture, setPrefecture] = useState("");
    const [address, setAddress] = useState("")
    const [count, setCount] = useState(0);

    // 郵便番号検索API 
    const handleGetAddress = async (): Promise<void> => {
        const res = await axios.get("https://zipcloud.ibsnet.co.jp/api/search", {
            params: { zipcode: zipcode },
        });
        console.log(res)
        if (res.data.status === 200) {
            setPrefecture(res.data.results[0].address1);
            setAddress(res.data.results[0].address2 + res.data.results[0].address3);
        } else {
            setPrefecture("");
            setAddress("");
        }
    };

    const onSubmit = (data: any) => {
        console.log(data);
        // const list = [];
        // data.depts.forEach((item: {
        //     deptName: any; dept_name: any;
        // }, index: any) => list.push(`\n担当部署${index}:${item.deptName}`)
        // );
        // reset();
    };

    /*担当部署
    const { fields, append, remove } = useFieldArray({
        control,
        name: "depts"
    });

    // const handleAddDept = (data) => {
    //     const list = [];
    //     data.depts.forEach((item: { dept_name: any; }, index: any) =>
    //         list.push(`\n担当部署${index}:${item.dept_name}`)
    //     );
    //     reset();
    // };
    */

    const countUp = () => setCount(count + 1);

    // const reduce = () => {
    //     if (count > 0) {
    //         remove(count);
    //         setCount(count - 1);
    //     }
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
                    <Row className="form-item">
                        <Col xs={5}>
                            <label htmlFor="company_name">
                                <span className="required">必須</span>会社名
                            </label>
                        </Col>
                        <Col xs={7}>
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
                    <Row className="form-item">
                        <Col xs={5}>
                            <label htmlFor="company_name_kana">
                                <span className="required">必須</span>会社名フリガナ
                            </label>
                        </Col>
                        <Col xs={7}>
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
                    <Row className="form-item">
                        <Col xs={5}>
                            <label htmlFor="company_tel">
                                <span className="required">必須</span>電話番号
                            </label>
                        </Col>
                        <Col xs={7}>
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
                    <Row className="form-item">
                        <Col xs={5}>
                            <label htmlFor="company_email">
                                <span className="required">必須</span>メールアドレス
                            </label>
                        </Col>
                        <Col xs={7}>
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
                    <Row className="form-item">
                        <Row>
                            <Col xs={7}>
                                <label>
                                    <span className="required">必須</span>住所
                                </label>
                            </Col>

                        </Row>
                        <Row className="pb-2 align-items-center">
                            <Col xs={5}>
                                <label htmlFor="zipcode" className="text-right">郵便番号</label>
                            </Col>
                            <Col xs={3}>
                                <input
                                    id="zipcode"
                                    {...register('zipcode', {
                                        required: true
                                    })}
                                    onChange={(e) => setZip(e.target.value)}
                                    placeholder="例)　1000000"

                                />
                            </Col>
                            <Col>
                                <Button
                                    className="address-serach-btn"
                                    onClick={handleGetAddress}
                                >
                                    住所検索
                                </Button>

                            </Col>
                        </Row>
                        <Row className="pb-2 align-items-center">
                            <Col xs={5}>
                                <label htmlFor="prefecture" className="text-right">都道府県</label>
                            </Col>
                            <Col xs={3}>
                                <input
                                    id="prefecture"
                                    {...register('prefecture', {
                                        required: true
                                    })}
                                    value={prefecture}
                                    onChange={(e) => setPrefecture(e.target.value)}
                                    placeholder="例)　東京"

                                />
                            </Col>
                        </Row>
                        <Row className="pb-2 align-items-center">
                            <Col xs={5}>
                                <label htmlFor="address" className="text-right">市区町村</label>
                            </Col>
                            <Col xs={7}>
                                <input
                                    id="address"
                                    {...register('address', {
                                        required: true
                                    })}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="例)　千代田区"
                                />
                            </Col>
                            <span className="error-msg">{errors.zipcode?.message}</span>
                            <span className="error-msg">{errors.prefecture?.message}</span>
                            <span className="error-msg">{errors.address?.message}</span>

                        </Row>
                    </Row>
                    <Row className="form-item">
                        <Col xs={5}>
                            <label htmlFor="member_name">
                                <span className="required">必須</span>担当者名
                            </label>
                        </Col>
                        <Col xs={7}>
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
                    <Row className="form-item">
                        {/* <Button
                            type="button"
                            className="button-add"
                            onClick={() => [append({ deptName: "" }), countUp()]}
                        >
                            担当部署追加
                        </Button>
                        {fields.map((field, index) => (
                            <div key={field.id}>
                                <Row className="pt-2 pb-2 align-items-center">
                                    <Col xs={5}>
                                        <label htmlFor={`depts.${index}.deptName`}>
                                            担当部署{index}
                                        </label>
                                    </Col>
                                    <Col xs={7}>
                                        <input
                                            id={`depts.${index}.deptName`}
                                            {...register(`depts.${index}.deptName`)}
                                            placeholder={`例) 営業部`}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        ))} */}
                    </Row>

                    <Row className="form-item check-box-area">
                        <div className="d-flex align-items-center center">
                            <input
                                type="checkbox"
                                className="checkBox"
                                id="checked"
                                {...register('checked', { required: true })}
                            />
                            <span>個人情報の取扱規程に同意する</span>
                        </div>
                        <span>当社の<Link to="" className="link-text">個人情報の取扱規程について</Link>同意される方のみ送信できます。</span>
                    </Row>
                    <Button
                        disabled={!isDirty || !isValid}
                        type="submit"
                        className="submit-btn"
                        value="Submit"
                    >送信
                    </Button>
                </div>
            </form>
        </Layout >

)
};

export default RegisterBz;