import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useViewModel = () => {
    const { id } = useParams<{ id: string }>();
    const [formData, setFormData] = useState<any>({});

    useEffect(() => {
        const fetchPlan = async () => {};
        fetchPlan();
    }, [id]);

    const handleUpdate = async () => {
        console.log('update success');
    };

    return {
        formData,
        setFormData,
        handleUpdate,
    };
};
