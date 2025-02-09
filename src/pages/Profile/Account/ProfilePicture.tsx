import { type FC, ChangeEvent } from 'react';

const ProfilePicture: FC<{ profilePic: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void; triggerFileInput: () => void }> = ({ profilePic, onChange, triggerFileInput }) => (
    <div className="relative w-auto">
        <img src={profilePic} className="max-w-24 h-24 rounded-full" />
        <img src="/assets/crop/icon/edit-pen.png" className="absolute w-6 h-6 cursor-pointer" style={{ bottom: '0%', right: '5%' }} onClick={triggerFileInput} />
        <input id="profile-pic-upload" type="file" className="hidden" accept="image/*" onChange={onChange} />
    </div>
);

export default ProfilePicture;
