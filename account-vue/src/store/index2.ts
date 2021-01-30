//目前的问题：
//1、全局变量太多---解决方式：挂在store上
import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

const store = {
    ...recordStore,
    ...tagStore,
};
export default store;