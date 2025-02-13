import IconEdit from '@/components/Icon/IconEdit';
import { type FC, ChangeEvent } from 'react';

const ProfilePicture: FC<{ profilePic: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void; triggerFileInput: () => void }> = ({ profilePic, onChange, triggerFileInput }) => (
    <div className="relative w-auto">
        <img src={profilePic} className="max-w-24 h-24 rounded-full" />
        <input id="profile-pic-upload" type="file" className="hidden" accept="image/*" onChange={onChange} />
    </div>
);

export default ProfilePicture;
