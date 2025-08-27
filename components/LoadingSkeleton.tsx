'use client'

interface LoadingSkeletonProps {
  className?: string
  height?: string
  width?: string
  rounded?: boolean
}

export default function LoadingSkeleton({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full',
  rounded = true 
}: LoadingSkeletonProps) {
  return (
    <div 
      className={`
        loading-skeleton 
        ${height} 
        ${width} 
        ${rounded ? 'rounded' : ''} 
        ${className}
      `}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="border-2 border-gray-700 rounded-lg p-6 space-y-4">
      <LoadingSkeleton height="h-6" width="w-3/4" />
      <LoadingSkeleton height="h-4" width="w-full" />
      <LoadingSkeleton height="h-4" width="w-5/6" />
      <LoadingSkeleton height="h-10" width="w-32" />
    </div>
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="border-2 border-gray-700 rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <LoadingSkeleton height="h-12" width="w-12" rounded />
        <LoadingSkeleton height="h-6" width="w-48" />
      </div>
      <LoadingSkeleton height="h-4" width="w-full" />
      <LoadingSkeleton height="h-4" width="w-4/5" />
    </div>
  )
}
