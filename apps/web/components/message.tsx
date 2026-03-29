export default function Message({ user = "user", ai = "ai" }: { user?: string; ai?: string }) {
  return (
    <>
      <div className="flex w-full flex-col gap-3 text-white">
        <p className="self-end rounded-xl bg-[#303030] px-3 py-2">{user}</p>
        <p className="self-start px-3 py-2">{ai}</p>
      </div>
    </>
  );
}
