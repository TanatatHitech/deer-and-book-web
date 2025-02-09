import { useContext, useEffect, useState } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate, useParams } from 'react-router-dom';
// import MockPlanRound from '@/Data/mock-plan-round.json';
import { CropPlanCreateForm } from '@/interfaces/cropPlan/create';
import { useCropPlanStore } from '@/store/cropPlanStore';
import Swal from 'sweetalert2';

export const INITIAL_STATE: CropPlanCreateForm = {
    cropPlan: {
        planTitle: '',
        notes: '',
        plantSpecies: '',
        plantId: '1',
    },
    cropPlanFertilizers: [
        { fertilizerText: '', amount: 0.0, unitId: 1, planDate: 0 },
        { fertilizerText: '', amount: 0.0, unitId: 1, planDate: 0 },
        { fertilizerText: '', amount: 0.0, unitId: 1, planDate: 0 },
    ],
    cropPlanPesticides: [{ pesticideText: '', amount: 0.0, unitId: 1, planDate: 0 }],
};

const ViewModel = () => {
    const [form, setForm] = useState(INITIAL_STATE);
    const { id, roundId } = useParams();
    const navigate = useNavigate();
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);
    const [step, updateStep] = useState(0);

    const data: any = INITIAL_STATE;
    const { createCropPlan } = useCropPlanStore();

    const handleChangeFertilizer = (index: number, key: 'fertilizerText' | 'amount' | 'unitId' | 'planDate', value: any) => {
        const newForm = { ...form };
        if (key === 'fertilizerText') {
            newForm.cropPlanFertilizers[index][key] = index;
        } else {
            newForm.cropPlanFertilizers[index][key] = value;
        }
        setForm(newForm);
        INITIAL_STATE.cropPlanFertilizers[index][key] = value;
    };

    const handleChangePesticide = (index: number, key: 'pesticideText' | 'amount' | 'unitId' | 'planDate', value: any) => {
        const newForm = { ...form };
        newForm.cropPlanPesticides[index][key] = value;
        setForm(newForm);
        INITIAL_STATE.cropPlanPesticides[index][key] = value;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            cropPlan: {
                ...prevForm.cropPlan,
                [name]: value,
            },
        }));
    };

    const setupPage = () => {
        setPageTitle(`Crop Care | DOAE`);
        setShowHeader(true);
        setTitle('Crop Care : Field A');
        setupBackButton(true, () => {
            setupBackButton(false);
            navigate(`/plan`);
        });
    };

    const onNext = () => {
        console.log('form', form);
        setStep(step + 1);
        INITIAL_STATE.cropPlanFertilizers = form.cropPlanFertilizers;
        INITIAL_STATE.cropPlanPesticides = form.cropPlanPesticides;
    };

    const onBack = () => {
        if (step > 0) setStep(step - 1);
    };

    const setStep = (newStep: number) => {
        updateStep(newStep);
    };

    const addFertilizerRound = () => {
        const newRound = { fertilizerText: '', amount: 0.0, unitId: 1, planDate: 0 };
        setForm((prev) => ({
            ...prev,
            cropPlanFertilizers: [...prev.cropPlanFertilizers, newRound],
        }));
    };

    const addPesticideRound = () => {
        const newRound = { pesticideText: '', amount: 0.0, unitId: 1, planDate: 0 };
        setForm((prev) => ({
            ...prev,
            cropPlanPesticides: [...prev.cropPlanPesticides, newRound],
        }));
    };

    const removeFertilizerRound = (index: number) => {
        setForm((prev) => {
            if (prev.cropPlanFertilizers.length <= 1) return prev;
            const newFertilizers = [...prev.cropPlanFertilizers];
            newFertilizers.splice(index, 1);
            return { ...prev, cropPlanFertilizers: newFertilizers };
        });
        INITIAL_STATE.cropPlanFertilizers = INITIAL_STATE.cropPlanFertilizers.filter((_, i) => i !== index);
    };

    const removePesticideRound = (index: number) => {
        setForm((prev) => {
            if (prev.cropPlanPesticides.length <= 1) return prev;
            const newPesticides = [...prev.cropPlanPesticides];
            newPesticides.splice(index, 1);
            return { ...prev, cropPlanPesticides: newPesticides };
        });
        INITIAL_STATE.cropPlanPesticides = INITIAL_STATE.cropPlanPesticides.filter((_, i) => i !== index);
    };

    const handleSave = async () => {
        const result = await Swal.fire({
            title: 'ยืนยันที่จะสร้างแผนการปลูก ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#068042',
            confirmButtonText: 'ใช่',
            cancelButtonText: 'ไม่',
        });
        if (result.isConfirmed) {
            const response = await createCropPlan(form);
            if (response.success) {
                navigate('/plan');
            }
        }
    };

    useEffect(() => {
        setupPage();
    }, []);

    useEffect(() => {
        return () => {
            setShowHeader(false);
            setTitle('');
        };
    }, []);

    return {
        step,
        data: form,
        onNext,
        onBack,
        handleChangeFertilizer,
        handleChangePesticide,
        handleChange,
        setStep,
        addFertilizerRound,
        addPesticideRound,
        removeFertilizerRound,
        removePesticideRound,
        handleSave,
    };
};

export default ViewModel;
