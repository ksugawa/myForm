import React, { ChangeEvent, useState, useCallback, useEffect } from "react";
import RegisterData from './component/RegisterData';
import initialValues from "./component/InitialValues";
import SCHEMA from "./component/Schema";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PATH from "../../path";
import './Inqury.scss';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Layout from '../../components/Layout';
import axios from "axios";


const Inqury = () => {
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid, errors },
    } = useForm({
        mode: 'onBlur',
        defaultValues: initialValues,
        resolver: yupResolver(SCHEMA),
    });

    const [zipcode, setZip] = useState("");
    const [prefecture, setPrefecture] = useState("");
    const [address, setAddress] = useState("")
    const [selected, setSelected] = useState("plan_1");
    const [count, setCount] = useState(0);
    const [groups, setGroups] = useState<RegisterData[]>([]);
    const [idCounter, setIdCounter] = useState<number>(1);

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
                                <label htmlFor="zipcode" className="text-right">郵便番号</label>
                            </Col>
                                <Col xs={5}>
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
                                    value={prefecture}
                                    onChange={(e) => setPrefecture(e.target.value)}
                                    placeholder="例)　東京"

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
                                <label htmlFor="dept_name1">担当者部署１</label>
                            </Col>
                            <Col xs={5}>
                                <input
                                    id="dept_name1"
                                    {...register('dept_name1', { required: true })}
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
        </Layout>
    );
};

export default Inqury;
