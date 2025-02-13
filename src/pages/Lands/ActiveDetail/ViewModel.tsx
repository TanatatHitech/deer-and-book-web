import { useContext, useEffect, useState } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate, useParams } from 'react-router-dom';
import { formatThaiDateNotime } from '@/utils/format-time';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import moment from 'moment';
import { convertToJSONPatch } from '@/utils/convertToJSONPatch';
const MySwal = withReactContent(Swal);

const ViewModel = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);
    const [data, setData] = useState<any>({});
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [editingDate, setEditingDate] = useState(false);

    const [modalData, setModalData] = useState<any>(null);
    const [modalType, setModalType] = useState<'fertilizer' | 'pesticide' | null>(null);

    const [UPDATE_FERTILIZER, setUpdateFertilizer] = useState({ id: 0, actualDate: null, actualFertilizerText: null, actualAmount: null });
    const [UPDATE_PESTICIDE, setUpdatePesticide] = useState({ id: 0, actualDate: null, actualPesticideText: null, actualAmount: null });

    const [showFertilizer, setShowFertilizer] = useState(true);
    const [showPesticide, setShowPesticide] = useState(false);

    const onFertilizerClick = () => {
        setShowFertilizer(true);
        setShowPesticide(false);
    };
    const onWeedInfectionClick = () => {
        setShowFertilizer(false);
        setShowPesticide(true);
    };

    const getAllActiveLand = async () => {
        // Mock fetch data
        const response = { success: true, data: MockLandData };
        if (response.success) {
            setData(response.data);
            if (response.data.cropPlanLands && response.data.cropPlanLands.length > 0) {
                setStartDate(response.data.cropPlanLands[0].startCropDate);
            }
        } else {
            console.error('Error fetching active land:', response.data);
        }
    };

    const handleSaveDate = async () => {
        if (startDate && data?.cropPlanLands?.[0]?.id) {
            const formattedDate = moment(startDate).format('YYYY-MM-DD');
            const patchData = convertToJSONPatch({ startCropDate: formattedDate });
            // Mock patch request
            const result = { success: true };
            if (result.success) {
                return true;
            } else {
                console.error(result.data);
            }
        }
        return false;
    };

    const startEditingDate = () => setEditingDate(true);
    const cancelEditingDate = () => setEditingDate(false);
    const saveDate = async () => {
        const success = await handleSaveDate();
        if (success) {
            setEditingDate(false);
            window.location.reload();
        }
    };

    const setupPage = () => {
        setPageTitle(`รายละเอียดแปลงที่ดิน | DOAE`);
        setShowHeader(true);
        setTitle('รายละเอียดแปลงที่ดิน');
        setupBackButton(true, () => {
            setupBackButton(false);
            navigate('/start ');
        });
    };

    const handleBackLand = () => {
        navigate('/start');
    };

    const onViewBoundaryMap = () => {
        navigate(`/land/${id}/boundary-map`);
    };

    const showSweetAlert = (type: 'fertilizer' | 'pesticide', data: any) => {
        const title = type === 'fertilizer' ? 'รายละเอียดการใส่ปุ๋ย' : 'รายละเอียดการใส่ยา';
        const html =
            type === 'fertilizer'
                ? `<div class="text-black flex flex-col gap-2"><p>สูตรปุ๋ย: ${data.actualFertilizerText}</p><p>วันที่: ${formatThaiDateNotime(data.actualDate)}</p><p>ปริมาณ: ${
                      data.actualAmount
                  } กิโลกรัม</p></div>`
                : `<div class="text-black flex flex-col gap-2"><p>ชื่อยา: ${data.actualPesticideText}</p><p>วันที่: ${formatThaiDateNotime(data.actualDate)}</p><p>ปริมาณ: ${
                      data.actualAmount
                  } ลิตร</p></div>`;

        Swal.fire({
            title,
            html,
            confirmButtonColor: '#4CAF50',
            confirmButtonText: 'ปิด',
        });
    };

    const handleOpenModal = (type: 'fertilizer' | 'pesticide', data: any) => {
        if (type === 'fertilizer') {
            setUpdateFertilizer({ id: Number(data.id), actualDate: null, actualFertilizerText: null, actualAmount: null });
        } else if (type === 'pesticide') {
            setUpdatePesticide({ id: Number(data.id), actualDate: null, actualPesticideText: null, actualAmount: null });
        }
        setModalType(type);
        setModalData(data);
    };

    const handleCloseModal = () => {
        setModalType(null);
        setModalData(null);
    };

    const refreshData = async () => {
        await getAllActiveLand();
    };

    const handleSubmitFertilizerForm = async (formData: any) => {
        const updatedData = {
            actualFertilizerText: formData.name,
            actualDate: formData.date,
            actualAmount: formData.amount,
        };
        setUpdateFertilizer((prevState) => ({
            ...prevState,
            ...updatedData,
        }));

        // Mock patch request
        const response = { success: true };
        if (response.success) {
            console.log('Fertilizer data updated successfully');
            window.location.reload();
        } else {
            console.error('Error updating fertilizer data:', response.data);
        }
        handleCloseModal();
    };

    const handleSubmitPesticideForm = async (formData: any) => {
        const updatedData = {
            actualPesticideText: formData.name,
            actualDate: formData.date,
            actualAmount: formData.amount,
        };
        setUpdatePesticide((prevState) => ({
            ...prevState,
            ...updatedData,
        }));

        // Mock patch request
        const response = { success: true };
        if (response.success) {
            console.log('Pesticide data updated successfully');
            window.location.reload();
        } else {
            console.error('Error updating pesticide data:', response.data);
        }
        handleCloseModal();
    };

    const showFertilizerForm = (data: any) => {
        MySwal.fire({
            title: 'ดำเนินกรใส่ปุ๋ย',
            html: (
                <div className="text-black flex flex-col gap-2">
                    <label>ชื่อปุ๋ย</label>
                    <input type="text" className="font-lg border border-gray-200 rounded-lg w-full p-2" id="name" />
                    <label>วันที่ใส่ปุ๋ย</label>
                    <input type="date" className="font-lg border border-gray-200 rounded-lg w-full p-2" id="date" defaultValue={new Date().toISOString().split('T')[0]} />
                    <label>จำนวนที่ใส่</label>
                    <input type="number" className="font-lg border border-gray-200 rounded-lg w-full p-2" id="amount" />
                </div>
            ),
            showCancelButton: true,
            confirmButtonColor: '#4CAF50',
            confirmButtonText: 'บันทึก',
            cancelButtonText: 'ยกเลิก',
            preConfirm: () => {
                const name = (document.getElementById('name') as HTMLInputElement).value;
                const date = (document.getElementById('date') as HTMLInputElement).value;
                const amount = (document.getElementById('amount') as HTMLInputElement).value;
                return { name, date, amount };
            },
        }).then((result) => {
            if (result.isConfirmed) {
                handleSubmitFertilizerForm(result.value);
            }
        });
    };

    const showPesticideForm = (data: any) => {
        MySwal.fire({
            title: 'ดำเนินการใส่ยา',
            html: (
                <div className="text-black flex flex-col gap-2">
                    <label>ชื่อยา</label>
                    <input type="text" className="font-lg border border-gray-200 rounded-lg w-full p-2" id="name" />
                    <label>วันที่ใส่ยา</label>
                    <input type="date" className="font-lg border border-gray-200 rounded-lg w-full p-2" id="date" defaultValue={new Date().toISOString().split('T')[0]} />
                    <label>จำนวนที่ใส่</label>
                    <input type="number" className="font-lg border border-gray-200 rounded-lg w-full p-2" id="amount" />
                </div>
            ),
            showCancelButton: true,
            confirmButtonColor: '#4CAF50',
            confirmButtonText: 'บันทึก',
            cancelButtonText: 'ยกเลิก',
            preConfirm: () => {
                const name = (document.getElementById('name') as HTMLInputElement).value;
                const date = (document.getElementById('date') as HTMLInputElement).value;
                const amount = (document.getElementById('amount') as HTMLInputElement).value;
                return { name, date, amount };
            },
        }).then((result) => {
            if (result.isConfirmed) {
                handleSubmitPesticideForm(result.value);
            }
        });
    };

    useEffect(() => {
        if (modalType && modalData) {
            if (modalType === 'fertilizer') {
                showFertilizerForm(modalData);
            } else if (modalType === 'pesticide') {
                showPesticideForm(modalData);
            }
        }
    }, [modalType, modalData]);

    useEffect(() => {
        setupPage();
        getAllActiveLand();
    }, []);

    useEffect(() => {
        return () => {
            setShowHeader(false);
            setTitle('');
        };
    }, []);

    return {
        data,
        startDate,
        setStartDate,
        editingDate,
        startEditingDate,
        cancelEditingDate,
        saveDate,
        onViewBoundaryMap,
        handleBackLand,
        showSweetAlert,
        handleOpenModal,
        showFertilizer,
        showPesticide,
        onFertilizerClick,
        onWeedInfectionClick,
    };
};

export default ViewModel;
