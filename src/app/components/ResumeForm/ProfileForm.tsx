import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <Input
          label="Name"
          labelClassName="col-span-full"
          name="name"
          placeholder="Sal Khan"
          value={name}
          onChange={handleProfileChange}
        />
        <Textarea
          label="Objective"
          labelClassName="col-span-full"
          name="summary"
          placeholder="Entrepreneur and educator obsessed with making education free for anyone"
          value={summary}
          onChange={handleProfileChange}
        />
        <Input
          label="Email"
          labelClassName="col-span-4"
          name="email"
          placeholder="hello@khanacademy.org"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="Phone"
          labelClassName="col-span-2"
          name="phone"
          placeholder="(123)456-7890"
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label="Website"
          labelClassName="col-span-4"
          name="url"
          placeholder="linkedin.com/in/khanacademy"
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label="Location"
          labelClassName="col-span-2"
          name="location"
          placeholder="NYC, NY"
          value={location}
          onChange={handleProfileChange}
        />
        
        <div className="col-span-full mt-4">
          <label className="text-base font-medium text-gray-700">Social Links & Portfolio</label>
          <div className="mt-2 space-y-2">
            {(profile.socialLinks || []).map((link, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 px-3 py-2 rounded-md border border-gray-300 text-sm"
                  value={link}
                  onChange={(e) => {
                    const newLinks = [...(profile.socialLinks || [])];
                    newLinks[i] = e.target.value;
                    handleProfileChange("socialLinks", newLinks as any);
                  }}
                  placeholder="https://github.com/username"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newLinks = (profile.socialLinks || []).filter((_, idx) => idx !== i);
                    handleProfileChange("socialLinks", newLinks as any);
                  }}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                handleProfileChange("socialLinks", [...(profile.socialLinks || []), ""] as any);
              }}
              className="text-xs font-semibold text-primary hover:underline"
            >
              + Add Social Link
            </button>
          </div>
        </div>
      </div>
    </BaseForm>
  );
};
