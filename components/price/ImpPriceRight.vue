<template>
  <v-card border flat>
    <v-tabs v-model="tab" align-tabs="center" grow bg-color="grey-lighten-5">
      <v-tab
        v-for="item in items"
        :key="item.title"
        :text="item.title"
        :value="item.title"
        class="font-weight-black"
      ></v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="item in items"
        :key="item.title"
        :value="item.title"
      >
        <v-card flat>
          <v-card-text>
            <div>
              <span class="me-1 text-h6 font-weight-bold"
                >{{ Number(item.price).toLocaleString() }}원</span
              >(VAT 포함)
            </div>
            <div class="font-weight-bold my-3">
              {{ item.subtitle }}
            </div>
            <div>
              <pre class="text-subtitle-2">{{ item.text }}</pre>
            </div>
          </v-card-text>
          <v-card-text>
            <div class="d-flex">
              <span>서버 구축</span><v-spacer></v-spacer
              ><v-icon :icon="item.serverDeployment" color="amber"></v-icon>
            </div>
            <div class="d-flex">
              <span>서버 이전</span><v-spacer></v-spacer
              ><v-icon :icon="item.serverRelocation" color="amber"></v-icon>
            </div>
            <div class="d-flex">
              <span>작업일</span><v-spacer></v-spacer
              ><span>{{ item.workingDay }}일</span>
            </div>
            <div class="d-flex">
              <span>수정 횟수</span><v-spacer></v-spacer
              ><span>{{ item.modifyNum }}회</span>
            </div>
          </v-card-text>
          <template #actions>
            <v-btn
              class="mb-2 font-weight-bold"
              color="amber"
              size="large"
              variant="elevated"
              block
              href="https://kmong.com/gig/220715"
              target="_blank"
            >
              구매하기
            </v-btn>
          </template>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    items: [
      {
        title: 'STANDARD',
        subtitle: '개발 | 테스트 | 포토폴리오 배포',
        text: '- 웹 서버, DB 서버 구축\n- 소스 배포\n- 도메인 연결',
        serverDeployment: 'mdi-check',
        serverRelocation: 'mdi-minus',
        workingDay: 1,
        modifyNum: 1,
        price: 60000,
      },
      {
        title: 'DELUXE',
        subtitle: '서비스 운영을 위한 배포',
        text: '- 웹 서버, DB 서버 구축\n- 소스 배포\n- 도메인, SSL 연결\n- 웹 방화벽 구축',
        serverDeployment: 'mdi-check',
        serverRelocation: 'mdi-check',
        workingDay: 2,
        modifyNum: 2,
        price: 120000,
      },
      {
        title: 'PREMIUM',
        subtitle: 'CI/CD 자동 배포',
        text: '- 웹 서버, DB 서버 구축\n- 자동 소스 배포 환경 구축\n- 도메인, SSL 연결\n- 웹 방화벽 구축',
        serverDeployment: 'mdi-check',
        serverRelocation: 'mdi-check',
        workingDay: 3,
        modifyNum: 3,
        price: 180000,
      },
    ],
  }),
};
</script>
