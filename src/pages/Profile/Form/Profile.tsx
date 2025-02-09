import { FC, Fragment, useState, useEffect } from 'react';
import { formatIdCard } from '@/utils/format-number';

interface InformationSettingFormProps {
    onSave?: (value: string) => void;
    onCancel?: (value: boolean) => void;
    profile: any; // Add profile prop
}

const InformationSettingForm: FC<InformationSettingFormProps> = ({ onSave, onCancel, profile }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        idCard: '',
        farmerId: 'FM1496-0721',
        phone: '',
        houseNo: '',
        village: '',
        subDistrict: '',
        district: '',
        province: '',
        postalCode: '70000',
        farmerNo:'',
    });
    type FormDataKey = keyof typeof formData;

    const addressFields: { label: string; name: FormDataKey }[] = [
        { label: 'บ้านเลขที่', name: 'houseNo' },
        { label: 'หมู่', name: 'village' },
        { label: 'ตำบล', name: 'subDistrict' },
        { label: 'อำเภอ', name: 'district' },
        { label: 'จังหวัด', name: 'province' },
        { label: 'เลขไปรษณีย์', name: 'postalCode' },
    ];

    const formatPhoneNumber = (value: string) => {
        const cleaned = ('' + value).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return `${match[1]}-${match[2]}-${match[3]}`;
        }
        return value;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let formattedValue = value;
        if (name === 'phone') {
            formattedValue = formatPhoneNumber(value);
        } else if (name === 'idCard') {
            formattedValue = formatIdCard(value);
        }
        setFormData((prev) => ({
            ...prev,
            [name]: formattedValue,
        }));
    };

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            phone: formatPhoneNumber(prev.phone),
        }));
    }, [formData.phone]);

    useEffect(() => {
        if (profile) {
            setFormData({
                fullName: profile.firstName || 'ไม่มีชื่อ',
                idCard: formatIdCard(profile.personalCode || 'ไม่มีหมายเลขบัตรประชาชน'),
                farmerId: profile.farmerId || 'ไม่มีรหัสทะเบียนเกษตรกร',
                phone: profile.phone || 'ไม่มีเบอร์โทรศัพท์',
                houseNo: profile.houseNo || '-',
                village: profile.moo || '-',
                subDistrict: profile.fTambon || '-',
                district: profile.fAmphur || '-',
                province: profile.fProvince || '-',
                postalCode: profile.fPostcode || '-',
                farmerNo: profile.farmerNo || 'ไม่มีรหัสทะเบียนเกษตรกร',
            });
        }
    }, [profile]);

    const handleCancel = () => {
        if (onCancel) {
            onCancel(false);
        }
    };

    return (
        <Fragment>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                    <span className="text-gray-500">
                        ชื่อ-นามสกุล <span className="text-red-500">*</span>
                    </span>
                    <input disabled type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input mt-1 bg-gray-200" />
                </div>
                <div className="col-span-12">
                    <span className="text-gray-500">
                        หมายเลขบัตรประชาชน <span className="text-red-500">*</span>
                    </span>
                    <input disabled type="text" name="idCard" value={formData.idCard} onChange={handleChange} className="form-input mt-1 bg-gray-200" />
                </div>
                <div className="col-span-12">
                    <span className="text-gray-500">
                        เลขทะเบียนเกษตรกร <span className="text-red-500">*</span>
                    </span>
                    <input disabled type="text" name="farmerId" value={formData.farmerNo} onChange={handleChange} className="form-input mt-1 bg-gray-200" />
                </div>
                <div className="col-span-12">
                    <span className="text-gray-500">
                        เบอร์โทรศัพท์ <span className="text-red-500">*</span>
                    </span>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} maxLength={12} className="form-input mt-1" />
                </div>
                <div className="col-span-12">
                    <span className="text-gray-500">
                        ที่อยู่ <span className="text-red-500">*</span>
                    </span>

                    <div className="grid grid-cols-12 gap-2 mt-2 text-xs">
                        {addressFields.map((field) => (
                            <div key={field.name} className="col-span-4">
                                <span className="text-gray-500">{field.label}</span>
                                <input disabled type="text" name={field.name} value={formData[field.name]} onChange={handleChange} className="form-input mt-1 bg-gray-200" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-6 lg:col-span-12 mt-8 mb-5">
                    <button className="mx-auto font-[400] text-white btn bg-crop-quaternary w-3/4 lg:w-60 h-8 rounded-full hover:bg-crop-primary">บันทึก</button>
                </div>
                <div className="col-span-6 lg:hidden mt-8 mb-5" onClick={handleCancel}>
                    <button className="mx-auto font-[400] text-white btn bg-danger w-3/4 h-8 rounded-full hover:bg-red-600">ยกเลิก</button>
                </div>
            </div>
        </Fragment>
    );
};

export default InformationSettingForm;
