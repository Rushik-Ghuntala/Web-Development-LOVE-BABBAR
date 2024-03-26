export const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";


<div className='flex gap-5'>
                <div>
                    <label>
                        <input
                        type='text' 
                        name='searchText'
                        id='searchText'
                        placeholder='Search Post'
                        />
                    </label>
                </div>
                <div>
                    <select value="Category">
                        
                        <option value="Spotlight">Spotlight</option>
                        <option value="News">News</option>
                        <option value="Video">Video</option>
                    </select>
                </div>
            </div>