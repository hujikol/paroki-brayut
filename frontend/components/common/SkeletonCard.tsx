import { Skeleton } from "@/components/common/Skeleton";

export function SkeletonCard() {
  return (
    <div className='flex w-full space-x-3'>
      <Skeleton className='h-[125px] w-[300px] rounded-md' />
      <div className='flex flex-col justify-center w-full space-y-3'>
        <Skeleton className='h-4 w-[500px]' />
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-3/4' />
        <Skeleton className='h-4 w-3/4' />
        <Skeleton className='h-4 w-1/2' />
      </div>
    </div>
  );
}
