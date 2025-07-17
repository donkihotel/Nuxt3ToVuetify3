<template>
  <v-container fluid>
    <v-row
      ><v-col cols="7">
        <v-card border flat>
          <v-img src="/img/imp_01.png" cover></v-img>
          <v-card-actions class="pa-4">
            리뷰 132건
            <v-spacer></v-spacer>
            <span class="me-2">({{ rating }})</span>
            <v-rating
              v-model="rating"
              color="grey"
              active-color="yellow-darken-3"
              size="18"
              readonly
            ></v-rating>
          </v-card-actions>
        </v-card>

        <v-card class="my-5" border flat>
          <h3 class="bg-surface-light pa-2">서비스 설명</h3>
          <v-card-text>
            <ServiceImpService />
          </v-card-text>
          <h3 class="bg-surface-light pa-2">가격</h3>
          <v-card-text>
            <PriceImpPriceLeft />
          </v-card-text>
          <h3 class="bg-surface-light pa-2">서비스 리뷰</h3>
          <v-card-text class="pa-0">
            <CommentImpComment />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-row>
          <v-col cols="12">
            <div class="text-medium-emphasis">#0000{{ productId }}</div>
            <p class="text-h6 font-weight-black my-1">
              개발된 프로그램 배포해 드립니다
            </p>
            <!-- 가격  -->
            <ImpPriceRight />
          </v-col>
          <v-col cols="12"
            ><v-card border flat>
              <v-list>
                <v-list-item>
                  <template #prepend>
                    <v-avatar color="grey-lighten-1" size="x-small">
                      <v-icon color="white">mdi-information</v-icon>
                    </v-avatar>
                  </template>
                  <div class="text-medium-emphasis">
                    구매하기를 클릭하는 경우 크몽으로 화면으로 이동 됩니다
                  </div>
                </v-list-item>
              </v-list>
            </v-card></v-col
          >
          <v-col cols="12">
            <SellerImpSeller />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ImpPriceRight from '~~/components/price/ImpPriceRight.vue';

// 현재 라우트 정보를 가져옵니다.
const route = useRoute();

// `id`를 동적으로 가져옵니다.
const productId = route.params.id;
</script>

<script>
export default {
  data: () => ({
    rating: 4.8,
  }),
};
</script>
