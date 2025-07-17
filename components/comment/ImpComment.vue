<template>
  <div>
    <v-list lines="three">
      <div v-for="(item, index) in items" :key="item.id">
        <v-list-item>
          <template #prepend>
            <v-avatar color="grey-lighten-1">
              <v-img :src="item.prependAvatar"></v-img>
            </v-avatar>
          </template>
          <div class="d-flex">
            {{ item.username }}
            <v-spacer></v-spacer>
            <span class="text-medium-emphasis">{{ item.orderDate }}</span>
          </div>
          <div>
            <v-rating
              v-model="item.rating"
              density="compact"
              size="x-small"
              color="grey"
              active-color="yellow-darken-3"
              class="me-2"
              readonly
            ></v-rating
            ><span class="text-medium-emphasis">{{
              parseFloat(item.rating).toFixed(1)
            }}</span>
          </div>
          <div>
            {{ item.comment }}
          </div>
          <div class="text-medium-emphasis">
            작업일: {{ item.workingDay }} | 주문 금액: {{ item.orderAmount }}
          </div>
        </v-list-item>
        <v-divider
          v-if="index < items.length - 1"
          :key="`${index}-divider`"
          inset
        ></v-divider>
      </div>
    </v-list>
    <v-btn class="mb-2 font-weight-bold" variant="outlined" block>
      더보기
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        prependAvatar:
          'https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/1gbJ61549863840.jpg',
        username: 'was*****',
        rating: 5.0,
        comment:
          '지난번 작업해준 것이 마음에 들어 또 의뢰 드렸습니다. 여전히 빠르고 친절하게 진행해 주셨습니다. 감사합니다.',
        workingDay: '7일',
        orderDate: '24.07.05 14:42',
        orderAmount: '10만원 ~ 20만원',
      },
      {
        id: 2,
        prependAvatar:
          'https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/WGt6s1661762782.png',
        username: 'CEO',
        rating: 5.0,
        comment:
          '최고입니다. 빠르고 정확하고, 제 요구사항에 딱 맞는 작업을 해주셨습니다!!',
        workingDay: '2일',
        orderDate: '24.07.04 14:42',
        orderAmount: '10만원 ~ 20만원',
      },
      {
        id: 3,
        prependAvatar: 'https://kmong.com/img/tools/main_user_gray.png',
        username: 'Whi*****',
        rating: 4.8,
        comment: '자기 일처럼 잘 처리해주십니다.매우 만족합니다.',
        workingDay: '5일',
        orderDate: '24.07.03 14:42',
        orderAmount: '30만원 ~ 40만원',
      },
      {
        id: 4,
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        username: 'was******',
        rating: 4.8,
        comment:
          '급박한 시일임에도 친절하게 설명해 주시며 빠르게 진행 했습니다. 서버에 대해 지식이 전무한데 적절한 스펙 설명과 함께 진행해 더욱 좋았습니다.',
        workingDay: '5일',
        orderDate: '24.07.02 14:42',
        orderAmount: '30만원 ~ 40만원',
      },
      {
        id: 5,
        prependAvatar:
          'https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/default/128_purple.png',
        username: '의*****',
        rating: 4.8,
        comment:
          '역시 전문가의 손길이 들어가니까 확실히 다릅니다. 궁금한 점도 친절하게 알려주시고, 문제를 다 해결해주셨습니다. 추천드립니다!',
        workingDay: '1일',
        orderDate: '24.07.01 14:42',
        orderAmount: '10만원 ~ 20만원',
      },
    ],
  }),
};
</script>
