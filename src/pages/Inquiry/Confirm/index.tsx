import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import { Row, Col, Button } from 'react-bootstrap';
import PATH from '../../../path';



const Confirm = (): JSX.Element => {
    const router = useRouter();

    const {
        getValues,
        handleSubmit,
        formState: { isDirty, isValid },
    } = useForm();

    const values = getValues();

    if (!isValid) {
        router.push(PATH.CONFIRM)
    };

    const onSubmit = (data: any) => {
        router.push(PATH.THANKS)
    };


    return (
        <Layout>
            <h1>確認</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form-body">
                <Row>
                    <Col xs={5}>
                        <p>ユーザー名</p>
                    </Col>
                    <Col xs={5}>
                        {values.user_name}
                    </Col>
                </Row>
                <Row>
                    <Col xs={5}>
                        <p>メールアドレス</p>
                    </Col>
                    <Col xs={5}>
                        {values.email}
                    </Col>
                </Row>
                <Row>
                    <Col xs={5}>
                        <p>パスワード</p>
                    </Col>
                    <Col xs={5}>
                        {values.password}
                    </Col>
                </Row>
                <Button
                    disabled={!isDirty || !isValid}
                    type="submit"
                    className="submit-btn"
                    value="Submit"
                >送信
                </Button>

            </form>
        </Layout>
    );
};

export default Confirm;
