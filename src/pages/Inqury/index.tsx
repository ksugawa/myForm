import React, { useState, useCallback } from "react";
import './InquryRegistration.scss'
//import { Row } from 'react-bootstrap/Row';

type FormData = {
    id: number;
    name: string;
};

const InquryRegistration = (): JSX.Element => {
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [count, setCount] = useState(0);
    const [groups, setGroups] = useState<FormData[]>([]);
    const [idCounter, setIdCounter] = useState<number>(1);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const addGroup = () => {
        if (groups.length < 5) {
            const formBody: FormData = {
                id: idCounter,
                name: "",

            };
            setIdCounter((prevId: number) => prevId + 1);
            setGroups(prevGroups => [...prevGroups, formBody]);
        } else {
            alert("最大で5つのグループしか追加できません。")
        };
    };

    const handleInputChange = (id: number, key: keyof FormData) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setGroups(prevGroups =>
                prevGroups.map((group =>
                    group.id === id ? { ...group, [key]: e.target.value } : group
                )
                ));
        };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <>
                    <label>
                        名前
                        <input
                            type="text"
                            name="member-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        会社名
                        <input
                            type="text"
                            name="company-name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </label>
                    <button
                        className="button-add"
                        onClick={addGroup}
                    >
                        グループ情報追加
                    </button>
                    {groups.map((group) => (
                        <div key={group.id}>
                            <input
                                type="text"
                                placeholder={`承認者 ${group.id}`}
                                value={group.name}
                                onChange={handleInputChange(group.id, 'name')}

                            />
                        </div>
                    ))}


                </>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default InquryRegistration;
