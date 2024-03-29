import React, { useState, useCallback } from "react";
import PATH from "../../path"
import './Inqury.scss'
import { Link } from "react-router-dom";

interface FormData {
    id: number;
    name: string;
    label: string;
    value: string;
};


const Inqury = (): JSX.Element => {
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [selected, setSelected] = useState("plan_1");
    const [count, setCount] = useState(0);
    const [groups, setGroups] = useState<FormData[]>([]);
    const [idCounter, setIdCounter] = useState<number>(1);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", { name, companyName, selected, groups });
    };

    const addGroup = () => {
        if (groups.length < 5) {
            const formBody: FormData = {
                id: idCounter,
                name: "",
                label: "",
                value: ""
            };
            setIdCounter((prevId: number) => prevId + 1);
            setGroups((prevGroups) => [...prevGroups, formBody]);
        };
    };

    const handleInputChange = (id: number, key: keyof FormData) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setGroups((prevGroups) =>
                prevGroups.map((group) =>
                    group.id === id ? { ...group, [key]: e.target.value } : group
                )
            );
        };


    return (
        <>
            <form onSubmit={handleSubmit} className="form-body">
                <>
                <div>
                    <p>詳細は下記をご確認ください。</p>
                    <Link to={PATH.HELP} target="_blank">ヘルプページにいく</Link>
                </div>

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

export default Inqury;
