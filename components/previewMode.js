export const PreviewMode = () => {
  return (
    <>
      <div className="flex justify-center">
        <p className="my-1 mx-3 py-1 text-red-600 font-medium text-sm sm:text-base md:text-xl lg:text-2xl">
          Preview Mode
        </p>
        
        <div>
        <a
          href="/api/exitPreview"
          className="my-1 mx-3 py-1 text-green-400 hover:text-green-700 font-medium text-sm sm:text-base md:text-xl lg:text-2xl  duration-200 transition-colors"
        >
          EXIT PREVIEW MODE
        </a>←Click</div>
      </div>
    </>
  );
}