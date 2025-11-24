import { useState } from 'react'
import './App.css'

import NewPage from './newpage'
import metadata from './metadata.json'

// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'


export default function App() {

  const [data, setData] = useState(null);

  const [chapter, setChapter] = useState(2);
  const [verse, setVerse] = useState(15);

  // const [open, setOpen] = useState(false)

  function buttonComponent({ val }) {
    return (
      <button className='p-2 m-2 rounded bg-auto bg-amber-700' onClick={() => fetchData(chapter, verse)}> {val} </button>
    );
  }

  async function fetchData(chapter = 2, verse = 2) {
    //validate inputs using metadata for correct chapter and verse ranges
    //metadata.chapters[chapternumber] = total verses
    let validParams = chapter <= 18 && verse <= metadata.chapters[chapter];

    if (validParams) {
      const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${verse}/`;
      console.log(url);
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'a385284376msh92102f9f9583beap16213fjsne8380b4103e4',
          'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
        return result;
      }
      catch (error) {
        console.error(error);
      }
    }

    else {
      alert('Invalid chapter or verse number. Please check and try again.');
      return null;
    }


  }

  return (
    <>
      <div id='input-section' className='m-4 p-4  border-red-600 rounded-lg row-auto'>

        <h1 className='text-3xl m-3'>Gita Verse Generator</h1>
        
        <div className="inline-grid w-full gap-4 grid-cols-2 items-center items">
          <div className=" items-center col-start-1 bg-blue-300 text-white dark:bg-blue-600 dark:text-shadow-red-300 text-sm font-bold p-4 py-3 rounded" role="alert">
            {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg> */}
            <label htmlFor="chapternum">Chapter Number</label>
            <select className='m-2 rounded backdrop-contrast-0' name="chapternum" id="" onChange={(event) => { setChapter(event.target.value) }}>
              {Object.keys(metadata.chapters).map((key) => (
                <option className='bg' key={key} value={key} onClick={() => setChapter(key)}>{key}</option>
              ))}
            </select>

            <label htmlFor="versenum">Verse Number {
            chapter ? ` (Max: ${metadata.chapters[chapter]})` : ''
            }</label>
            <input className='m-2 rounded backdrop-contrast-0 placeholder-zinc-300' type="number" name='versenum' value={verse} onChange={(event) => { setVerse(event.target.value) }} />
            {buttonComponent({ val: 'Generate' })}

            {/* <a
              onClick={() => setOpen(true)}
              className="rounded-md flex text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
            >
              <svg className="fill-current w-4 h-4 mr-2 items-start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
              <span className='items-center'>Chapter & Verse Information</span>
            </a> */}
          </div>
          <div className="p-4 col-start-2">
            <NewPage msg={data} />
          </div>

          {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} for {name}
        </button>
      </div> */}


          {/* <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                  transition
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">

                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <DialogTitle as="h3" className="text-2xl font-semibold text-gray-900">
                          Chapters and Verses
                        </DialogTitle>
                        <div className="mt-2">
                          <div className="text-sm text-gray-500">
                            {Object.keys(metadata.chapters).map((key) => {

                              return (
                                <div key={key}>
                                  <strong className="text-xl">Chapter {key}:</strong> <span className="italic"> Verses: {metadata.chapters[key]} </span><br />
                                </div>
                              )

                            })
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="inline-flex w-full justify-center rounded-md bg-amber-800 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-amber-950 sm:ml-3 sm:w-auto"
                    >
                      Ok
                    </button>

                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog> */}
        </div>

      </div>



    </>
  )

}









