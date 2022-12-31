// This component will be automatically rendered while the page.tsx contents are being retrieved
//This is a feature in next.js 13 which automatically renders the loading.tsx component while waiting
// for the page components to be retrieved

function Loading() {
  return (
    <div className="animate-pulse font-serif text-lg text-gray-400 text-center p-10">
      Loading News Feed...
    </div>
  );
}

export default Loading;
