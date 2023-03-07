
import Button from '../components/Button'
import ButtonDummy from '../components/ButtonDummy'

function ButtonView() {
    return (
        <div className='w-4/5 mb-6'>
            <div className='body-content mx-auto w-4/5 flex flex-col'>
                <h1 className='mt-12 font-medium text-base text-header'>Button</h1>

                <div className='w-full flex flex-col mt-7 gap-y-14'>
                    <div className='flex flex-row gap-x-20'>
                        <div className='flex flex-col gap-3'>
                            <p>{`Button default`}</p>
                            <Button />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>{`&:hover, &:focus`}</p>
                            <ButtonDummy />
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-20'>
                        <div className='flex flex-col gap-3'>
                            <p>{`Button variant outline`}</p>
                            <Button variant='outline' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>{`&:hover, &:focus`}</p>
                            <ButtonDummy variant='outline' />
                        </div>
                    </div>

                    <div className='flex flex-row gap-x-20'>
                        <div className='flex flex-col gap-3'>
                            <p>{`Button variant text`}</p>
                            <Button variant='text' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>{`&:hover, &:focus`}</p>
                            <ButtonDummy variant='text' />
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-20'>
                        <div className='flex flex-col gap-3'>
                            <p>{`Button disabled shadow`}</p>
                            <Button disabledShadow />
                        </div>
                    </div>

                    <div className='flex flex-row gap-x-20'>
                        <div className='flex flex-col gap-3'>
                            <p>{`Button disabled`}</p>
                            <Button disabled />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>{`Button variant text dan disabled`}</p>
                            <Button disabled variant='text' />
                        </div>
                    </div>

                    <div className='flex flex-row gap-x-20'>
                        <div className='flex flex-col gap-3'>
                            <p>{`Button Icon Local Grocery`}</p>
                            <Button startIcon='local_grocery_store' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>{`Button End Icon Local Grocery`}</p>
                            <Button endIcon='local_grocery_store' />
                        </div>
                    </div>

                    <div className='flex flex-row gap-x-20'>
                        <div className='flex flex-col gap-3'>
                            <p>{`Button Size SM`}</p>
                            <Button size='sm' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>{`Button Size MD`}</p>
                            <Button size='md' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>{`Button Size LG`}</p>
                            <Button size='lg' />
                        </div>
                    </div>

                    <div className='flex flex-row gap-x-20'>
                        <div className='flex flex-col gap-3'>
                            <p>{`Button Color Default`}</p>
                            <Button color='default' />
                        </div>

                        <div className='flex flex-col gap-3'>
                            <p>{`Button Color Primary`}</p>
                            <Button color='primary' />
                        </div>

                        <div className='flex flex-col gap-3'>
                            <p>{`Button Color Primary`}</p>
                            <Button color='secondary' />
                        </div>

                        <div className='flex flex-col gap-3'>
                            <p>{`Button Color Primary`}</p>
                            <Button color='danger' />
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default ButtonView