import Image from 'next/image';

export default function Support() {
  return (
    <main className="flex-1 min-w-0 px-4 pb-24 pt-6 lg:px-6 lg:py-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold text-primary-100">Support</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <Image alt="big wow" src="/favicon/favicon.svg" width="512" height="512" />
        
      </div>
    </main>
  );
  }